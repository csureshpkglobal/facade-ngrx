import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { Observable, Subscription } from 'rxjs';
import { BooksFacadeService } from '../../app/ngrx-store/books-facade.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchWord = '';
  items$: Observable<Book[]>;
  subscriptions: Subscription[] = [];
  searchForm = this.fb.group({
    searchWord: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private booksFacadeService: BooksFacadeService
  ) {
    this.items$ = this.booksFacadeService.getAllItems$;
  }
  ngOnInit(): void {
    this.booksFacadeService.getRecentSearWords$.subscribe(
      (recentSearchWords) => {
        this.searchWord = recentSearchWords[recentSearchWords.length - 1] || '';
        this.searchForm.patchValue({ searchWord: this.searchWord });
      }
    );
    if (this.searchWord !== '') {
      this.booksFacadeService.getBooksByName(this.searchWord);
    }
  }
  onSubmit(): void {
    this.booksFacadeService.getBooksByName(
      this.searchForm.controls.searchWord.value
    );
  }
  getBookDetails(id: string): void {
    this.booksFacadeService.setSelectedId(parseInt(id, 10));
    this.router.navigate(['/bookdetails']);
  }
}
