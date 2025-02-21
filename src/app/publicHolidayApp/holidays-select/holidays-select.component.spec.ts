import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysSelectComponent } from './holidays-select.component';

describe('HolidaysSelectComponent', () => {
  let component: HolidaysSelectComponent;
  let fixture: ComponentFixture<HolidaysSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidaysSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaysSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
