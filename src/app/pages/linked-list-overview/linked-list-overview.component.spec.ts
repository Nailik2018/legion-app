import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListOverviewComponent } from './linked-list-overview.component';

describe('LinkedListOverviewComponent', () => {
  let component: LinkedListOverviewComponent;
  let fixture: ComponentFixture<LinkedListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
