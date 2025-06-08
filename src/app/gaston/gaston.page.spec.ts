import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastonPage } from './gaston.page';

describe('GastonPage', () => {
  let component: GastonPage;
  let fixture: ComponentFixture<GastonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GastonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
