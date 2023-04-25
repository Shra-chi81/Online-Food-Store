import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousFoodComponent } from './famous-food.component';

describe('FamousFoodComponent', () => {
  let component: FamousFoodComponent;
  let fixture: ComponentFixture<FamousFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
