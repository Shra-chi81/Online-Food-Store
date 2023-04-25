import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCollectionComponent } from './food-collection.component';

describe('FoodCollectionComponent', () => {
  let component: FoodCollectionComponent;
  let fixture: ComponentFixture<FoodCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
