import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectpage } from './projectpage';

describe('Projectpage', () => {
  let component: Projectpage;
  let fixture: ComponentFixture<Projectpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Projectpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
