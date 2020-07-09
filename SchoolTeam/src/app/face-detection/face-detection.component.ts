import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.scss']
})
export class FaceDetectionComponent implements OnInit {
  forwardTimes = [];

  constructor() { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
