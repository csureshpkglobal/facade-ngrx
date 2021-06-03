import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';

import { SearchComponent } from './search.component';
import { BooksService } from '../books.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const mockBooks = [
  {
    id: '1',
    title: 'Angular',
    imageLink: '/',
    description: 'desc1',
    authors: 'author1',
    ratingsCount: '5',
    publisher: 'pub1',
    pageCount: '10',
    language: 'en',
  },
];
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let bookService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [BooksService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    bookService = TestBed.inject(BooksService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    spyOn(bookService, 'getSearchKeyWord').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });
  it('form valid when non empty', () => {
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(component.searchForm.valid).toBeTruthy();
  });
  it('searchWord field invalid with empty', () => {
    const searchWord = component.searchForm.controls.searchWord;
    expect(searchWord.valid).toBeFalsy();
  });
  it('searchWord field validity', () => {
    const searchWord = component.searchForm.controls.searchWord;
    expect(searchWord.hasError).toBeTruthy();
  });
  it('searchWord field validity with value provided', () => {
    const searchWord = component.searchForm.controls.searchWord;
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(searchWord.valid).toBeTruthy();
  });

  it('should submit form', () => {
    expect(component.searchForm.valid).toBeFalsy();
    const searchWord = component.searchForm.controls.searchWord;
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(searchWord.valid).toBeTruthy();

    component.onSubmit();

    expect(searchWord.value).toEqual('Angular');
  });
  it('should check getBookDetails', () => {
    spyOn(bookService, 'getBooksByName').and.returnValue(of(mockBooks));
    spyOn(bookService, 'setSearchKeyWord').and.returnValue(undefined);
    component.searchForm.setValue({ searchWord: 'Angular' });

    component.onSubmit();

    expect(bookService.getBooksByName).toBeTruthy();
  });
});
