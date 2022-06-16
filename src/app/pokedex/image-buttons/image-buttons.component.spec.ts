import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageButtonsComponent } from './image-buttons.component';

describe('ImageButtonsComponent', () => {
  let component: ImageButtonsComponent;
  let fixture: ComponentFixture<ImageButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
