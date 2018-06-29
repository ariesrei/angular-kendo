import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteSessionComponent } from './suite-session.component';

describe('SuiteSessionComponent', () => {
  let component: SuiteSessionComponent;
  let fixture: ComponentFixture<SuiteSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
