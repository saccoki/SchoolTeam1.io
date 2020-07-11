import { Component, OnInit } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.scss']
})
export class FaceDetectionComponent implements OnInit {
  forwardTimes = [];


  SSD_MOBILENETV1 = 'ssd_mobilenetv1';
  TINY_FACE_DETECTOR = 'tiny_face_detector';
  selectedFaceDetector = this.SSD_MOBILENETV1;
// ssd_mobilenetv1 options
  minConfidence = 0.5;

  // tiny_face_detector options
  inputSize = 512;
  scoreThreshold = 0.5;
  minFaceSize = 10;

  constructor() { }

  async ngOnInit(): Promise<any> {
    // await this.run();
    // await faceapi.nets.ssdMobilenetv1.loadFromUri('assets/models');


    // faceapi.env.monkeyPatch({
    //   createCanvasElement: () => document.createElement('canvas'),
    //   createImageElement: () => document.createElement('img')
    // });

    console.log(faceapi.nets);
    // await this.renderStuff();
    this.initFaceDetectionControls();
    await this.onPlay();
    this.run();
  }

  async onPlay(): Promise<any> {
    const videoEl: any = document.getElementById('inputVideo');

    if (videoEl.paused || videoEl.ended || !this.isFaceDetectionModelLoaded()) {
      return setTimeout(() => this.onPlay());
    }


    const options = this.getFaceDetectorOptions();

    const ts = Date.now();

    const result = await faceapi.detectSingleFace(videoEl, options);
    // console.log('\n\n\n\n');
    // console.log(result);
    // console.log('\n\n\n\n');
    // this.updateTimeStats(Date.now() - ts);

    if (result) {
      const canvas: any = document.getElementById('overlay');
      const dims = faceapi.matchDimensions(canvas, videoEl, true);
      faceapi.draw.drawDetections(canvas, faceapi.resizeResults(result, dims));
    }

    setTimeout(() => this.onPlay());
  }

  async run(): Promise<any> {
    // load face detection model
    await this.changeFaceDetector(this.TINY_FACE_DETECTOR);
    this.changeInputSize(128);

    // try to access users webcam and stream the images
    // to the video element
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    const videoEl: any = document.getElementById('inputVideo');
    videoEl.srcObject = stream;

    // this.renderStuff();
  }


  async renderStuff(): Promise<any> {
    const input: any = document.getElementById('inputVideo');
    const detections1 = await faceapi.detectAllFaces(input, new faceapi.SsdMobilenetv1Options());
    const detections2 = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions());
// single face
    await faceapi.detectSingleFace(input);
    await faceapi.detectSingleFace(input).withFaceExpressions();
    await faceapi.detectSingleFace(input).withFaceLandmarks();
    await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceExpressions();
    await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceExpressions().withFaceDescriptor();
    await faceapi.detectSingleFace(input).withFaceLandmarks().withAgeAndGender().withFaceDescriptor();
    await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptor();
    // const detections2 = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions());


    const displaySize = { width: input.width, height: input.height  };
// resize the overlay canvas to the input dimensions
    const canvas: any = document.getElementById('overlay');
    faceapi.matchDimensions(canvas, displaySize);

    /* Display face landmarks */
    const detectionsWithLandmarks = await faceapi
    .detectAllFaces(input)
    .withFaceLandmarks();
// resize the detected boxes and landmarks in case your displayed image has a different size than the original
    const resizedResults = faceapi.resizeResults(detectionsWithLandmarks, displaySize);
// draw detections into the canvas
    faceapi.draw.drawDetections(canvas, resizedResults);
// draw the landmarks into the canvas
    faceapi.draw.drawFaceLandmarks(canvas, resizedResults);


  }









  getFaceDetectorOptions(): any {
    // console.log(`min confidence: ${this.minConfidence}`);
    return this.selectedFaceDetector === this.SSD_MOBILENETV1
      ? new faceapi.SsdMobilenetv1Options({ minConfidence: this.minConfidence })
      : new faceapi.TinyFaceDetectorOptions({ inputSize: this.inputSize, scoreThreshold: this.scoreThreshold });
  }

  onIncreaseMinConfidence(): void {
    this.minConfidence = Math.min(faceapi.utils.round(this.minConfidence + 0.1), 1.0);
    $('#minConfidence').val(this.minConfidence);
    console.log(`min confidence: ${this.minConfidence}`);
    // this.updateResults();
  }

  onDecreaseMinConfidence(): void {
    this.minConfidence = Math.max(faceapi.utils.round(this.minConfidence - 0.1), 0.1);
    $('#minConfidence').val(this.minConfidence);
    // this.updateResults();
  }

  onInputSizeChanged(e): void {
    this.changeInputSize(e.target.value);
    // this.updateResults();
  }

 changeInputSize(size): void {
  this.inputSize = parseInt(size, 10);

  const inputSizeSelect = $('#inputSize');
  inputSizeSelect.val(this.inputSize);
  // inputSizeSelect.material_select();
}

 onIncreaseScoreThreshold(): void {
  this.scoreThreshold = Math.min(faceapi.utils.round(this.scoreThreshold + 0.1), 1.0);
  $('#scoreThreshold').val(this.scoreThreshold);
  // this.updateResults()
}

 onDecreaseScoreThreshold(): void {
  this.scoreThreshold = Math.max(faceapi.utils.round(this.scoreThreshold - 0.1), 0.1);
  $('#scoreThreshold').val(this.scoreThreshold);
  // this.updateResults();
}

 onIncreaseMinFaceSize(): void {
  this.minFaceSize = Math.min(faceapi.utils.round(this.minFaceSize + 20), 300);
  $('#minFaceSize').val(this.minFaceSize);
}

 onDecreaseMinFaceSize(): void {
  this.minFaceSize = Math.max(faceapi.utils.round(this.minFaceSize - 20), 50);
  $('#minFaceSize').val(this.minFaceSize);
}

 getCurrentFaceDetectionNet(): any {
  if (this.selectedFaceDetector === this.SSD_MOBILENETV1) {
    return faceapi.nets.ssdMobilenetv1;
  }
  if (this.selectedFaceDetector === this.TINY_FACE_DETECTOR) {
    return faceapi.nets.tinyFaceDetector;
  }
}

 isFaceDetectionModelLoaded(): any {
  // console.log(`min confidence: ${JSON.stringify(this.getCurrentFaceDetectionNet())}`);

  return !!this.getCurrentFaceDetectionNet().params;
}

async changeFaceDetector(detector): Promise<any> {
  ['#ssd_mobilenetv1_controls', '#tiny_face_detector_controls']
    .forEach(id => $(id).hide());

  this.selectedFaceDetector = detector;
  const faceDetectorSelect: any = $('#selectFaceDetector');
  faceDetectorSelect.val(detector);
  faceDetectorSelect.material_select();

  $('#loader').show();
  if (!this.isFaceDetectionModelLoaded()) {
    await this.getCurrentFaceDetectionNet().load('assets/models');
  }

  $(`#${detector}_controls`).show();
  $('#loader').hide();
}

async onSelectedFaceDetectorChanged(e): Promise<any> {
  this.selectedFaceDetector = e.target.value;

  await this.changeFaceDetector(e.target.value);
  // this.updateResults();
}

 initFaceDetectionControls(): void {
  console.log('ishank');
  const faceDetectorSelect: any = $('#selectFaceDetector');
  faceDetectorSelect.val(this.selectedFaceDetector);
  faceDetectorSelect.on('change', this.onSelectedFaceDetectorChanged);
  faceDetectorSelect.material_select();

  const inputSizeSelect: any = $('#inputSize');
  inputSizeSelect.val(this.inputSize);
  inputSizeSelect.on('change', this.onInputSizeChanged);
  inputSizeSelect.material_select();
}

}
