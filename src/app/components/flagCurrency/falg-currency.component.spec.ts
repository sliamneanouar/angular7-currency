import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalgCurrencyComponent } from './falg-currency.component';

describe('FalgCurrencyComponent', () => {
  let component: FalgCurrencyComponent;
  let fixture: ComponentFixture<FalgCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalgCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalgCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
