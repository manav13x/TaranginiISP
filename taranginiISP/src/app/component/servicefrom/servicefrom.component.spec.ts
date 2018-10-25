import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefromComponent } from './servicefrom.component';

describe('ServicefromComponent', () => {
  let component: ServicefromComponent;
  let fixture: ComponentFixture<ServicefromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
