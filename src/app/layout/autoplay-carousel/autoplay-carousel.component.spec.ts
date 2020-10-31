import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplayCarouselComponent } from './autoplay-carousel.component';

describe('AutoplayCarouselComponent', () => {
  let component: AutoplayCarouselComponent;
  let fixture: ComponentFixture<AutoplayCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoplayCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoplayCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
