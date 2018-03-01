import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipBoxComponent } from './fellowship-box.component';

describe('FellowshipBoxComponent', () => {
  let component: FellowshipBoxComponent;
  let fixture: ComponentFixture<FellowshipBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowshipBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
