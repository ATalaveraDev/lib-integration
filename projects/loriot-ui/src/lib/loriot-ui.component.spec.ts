import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoriotUiComponent } from './loriot-ui.component';

describe('LoriotUiComponent', () => {
  let component: LoriotUiComponent;
  let fixture: ComponentFixture<LoriotUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoriotUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoriotUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
