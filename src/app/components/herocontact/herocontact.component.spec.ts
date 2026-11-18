import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroContactComponent } from './herocontact.component';

describe('HeroContactComponent', () => {
  let component: HeroContactComponent;
  let fixture: ComponentFixture<HeroContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroContactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
