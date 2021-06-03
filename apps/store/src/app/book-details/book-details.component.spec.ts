import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { MycollectionService } from '../mycollection.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let book: Book;
  let mockCartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, RouterModule],
      providers: [BooksService, CartService, MycollectionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockCartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add item to the cart when addToCart is called', () => {
    book = {
      id: '1',
      title: 'Angular',
      imageLink: '/',
      description: 'desc1',
      authors: 'author1',
      ratingsCount: '5',
      publisher: 'pub1',
      pageCount: '10',
      language: 'en',
    };
    spyOn(mockCartService, 'addCartItem').and.returnValue(undefined);
    component.bookDetails = book;

    component.addToCart();

    expect(mockCartService.addCartItem).toHaveBeenCalled();
  });
});
