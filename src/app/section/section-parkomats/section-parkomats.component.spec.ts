import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionParkomatsComponent } from './section-parkomats.component';

describe('SectionParkomatsComponent', () => {
  let component: SectionParkomatsComponent;
  let fixture: ComponentFixture<SectionParkomatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionParkomatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionParkomatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
