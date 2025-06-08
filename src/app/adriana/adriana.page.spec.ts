import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdrianaPage } from './adriana.page';

describe('AdrianaPage', () => {
  let component: AdrianaPage;
  let fixture: ComponentFixture<AdrianaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrianaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
