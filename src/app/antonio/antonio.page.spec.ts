import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntonioPage } from './antonio.page';

describe('AntonioPage', () => {
  let component: AntonioPage;
  let fixture: ComponentFixture<AntonioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AntonioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
