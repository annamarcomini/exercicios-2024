import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiLoginComponent } from './cardi-login.component';

describe('CardiLoginComponent', () => {
  let component: CardiLoginComponent;
  let fixture: ComponentFixture<CardiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
