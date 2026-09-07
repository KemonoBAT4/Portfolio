import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdetailspage } from './projectdetailspage';

describe('Projectdetailspage', () => {
  let component: Projectdetailspage;
  let fixture: ComponentFixture<Projectdetailspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectdetailspage],
    }).compileComponents();

    fixture = TestBed.createComponent(Projectdetailspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
