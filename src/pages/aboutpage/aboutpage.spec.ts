import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutpage } from './aboutpage';

describe('Aboutpage', () => {
  let component: Aboutpage;
  let fixture: ComponentFixture<Aboutpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
