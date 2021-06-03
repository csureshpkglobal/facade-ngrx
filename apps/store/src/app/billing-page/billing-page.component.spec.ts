import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { MycollectionService } from '../mycollection.service';

import { BillingPageComponent } from './billing-page.component';

describe('BillingPageComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;
  let cartService: CartService;
  let mycollectionService: MycollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingPageComponent, NgForm],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [BooksService, CartService, MycollectionService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    cartService = TestBed.inject(CartService);
    mycollectionService = TestBed.inject(MycollectionService);
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called onSubmit', () => {
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.onSubmit('name', 's@g.com', 0, 'address');

    expect(mycollectionService.addCollection).toHaveBeenCalled();
  });
  it('should check name field', () => {
    const name = component.billingForm.controls.name;
    expect(name).toBeTruthy();
  });
  it('should check email field', () => {
    const email = component.billingForm.controls.email;
    expect(email).toBeTruthy();
  });
  it('should check phone field', () => {
    const phone = component.billingForm.controls.phone;
    expect(phone).toBeTruthy();
  });
  it('should check address field', () => {
    const address = component.billingForm.controls.address;
    expect(address).toBeTruthy();
  });
});
