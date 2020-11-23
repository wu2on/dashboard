import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatisticComponent } from './section-statistic.component';

describe('SectionStatisticComponent', () => {
  let component: SectionStatisticComponent;
  let fixture: ComponentFixture<SectionStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
