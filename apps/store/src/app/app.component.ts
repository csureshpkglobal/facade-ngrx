import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BooksFacadeService } from '../app/ngrx-store/books-facade.service';
import { Book } from './book.model';
import { Collection } from './collection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  opened = true;
  title = 'store';
  items$: Observable<Book[]>;
  collections$: Observable<Collection[]>;

  constructor(private booksFacadeService: BooksFacadeService) {}
  ngOnInit(): void {
    this.items$ = this.booksFacadeService.getAllCartItems$;
    this.collections$ = this.booksFacadeService.getAllCollections$;
  }
}
