import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinkItemComponent } from './header-link-item-component';

describe('HeaderLinkItemComponent', () => {
  let component: HeaderLinkItemComponent;
  let fixture: ComponentFixture<HeaderLinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLinkItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderLinkItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
