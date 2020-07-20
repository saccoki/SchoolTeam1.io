import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceLandmarkDetectionComponent } from './face-landmark-detection.component';
console.log(FaceLandmarkDetectionComponent);

describe('FaceLandmarkDetectionComponent', () => {
  let component: FaceLandmarkDetectionComponent;
  let fixture: ComponentFixture<FaceLandmarkDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceLandmarkDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceLandmarkDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
