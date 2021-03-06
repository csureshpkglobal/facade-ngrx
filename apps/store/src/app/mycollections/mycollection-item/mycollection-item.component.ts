import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksFacadeService } from '../../../app/ngrx-store/books-facade.service';
import { Collection } from '../../collection.model';

@Component({
  selector: 'app-mycollection-item',
  templateUrl: './mycollection-item.component.html',
  styleUrls: ['./mycollection-item.component.css'],
})
export class MycollectionItemComponent implements OnInit {
  collections$: Observable<Collection[]>;

  constructor(private booksFacadeService: BooksFacadeService) {}
  ngOnInit(): void {
    this.collections$ = this.booksFacadeService.getAllCollections$;
  }
}
