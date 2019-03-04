import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDealsSummaryComponent } from './daily-deals-summary.component';

describe('DailyDealsSummaryComponent', () => {
  let component: DailyDealsSummaryComponent;
  let fixture: ComponentFixture<DailyDealsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDealsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDealsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
