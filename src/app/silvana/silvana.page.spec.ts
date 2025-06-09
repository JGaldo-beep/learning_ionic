import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilvanaPage } from './silvana.page';

describe('SilvanaPage', () => {
  let component: SilvanaPage;
  let fixture: ComponentFixture<SilvanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SilvanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
