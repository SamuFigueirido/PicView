import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePublicationComponent } from './image-publication.component';

describe('ImagePublicationComponent', () => {
  let component: ImagePublicationComponent;
  let fixture: ComponentFixture<ImagePublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePublicationComponent]
    });
    fixture = TestBed.createComponent(ImagePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
