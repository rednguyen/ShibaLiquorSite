import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOnlineorderComponent } from './body-onlineorder.component';

describe('BodyOnlineorderComponent', () => {
  let component: BodyOnlineorderComponent;
  let fixture: ComponentFixture<BodyOnlineorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyOnlineorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyOnlineorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
