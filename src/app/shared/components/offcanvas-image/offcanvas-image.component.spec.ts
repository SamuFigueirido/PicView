import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasImageComponent } from './offcanvas-image.component';

describe('OffcanvasImageComponent', () => {
  let component: OffcanvasImageComponent;
  let fixture: ComponentFixture<OffcanvasImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasImageComponent]
    });
    fixture = TestBed.createComponent(OffcanvasImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
