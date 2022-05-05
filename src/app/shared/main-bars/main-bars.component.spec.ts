import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBarsComponent } from './main-bars.component';

describe('MainBarsComponent', () => {
  let component: MainBarsComponent;
  let fixture: ComponentFixture<MainBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
