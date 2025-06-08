import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JorgeCPage } from './jorge-c.page';

describe('JorgeCPage', () => {
  let component: JorgeCPage;
  let fixture: ComponentFixture<JorgeCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JorgeCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
