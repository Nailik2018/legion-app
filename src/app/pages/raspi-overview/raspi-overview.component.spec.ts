import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiOverviewComponent } from './raspi-overview.component';

describe('RaspiOverviewComponent', () => {
  let component: RaspiOverviewComponent;
  let fixture: ComponentFixture<RaspiOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspiOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
