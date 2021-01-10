import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilitycalcComponent } from './eligibilitycalc.component';

describe('EligibilitycalcComponent', () => {
  let component: EligibilitycalcComponent;
  let fixture: ComponentFixture<EligibilitycalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilitycalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilitycalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
