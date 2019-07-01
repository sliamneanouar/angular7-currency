import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCurencyComponent } from './list-curency.component';

describe('ListCurencyComponent', () => {
  let component: ListCurencyComponent;
  let fixture: ComponentFixture<ListCurencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCurencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
