import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collection } from './collection.model';

@Injectable({
  providedIn: 'root',
})
export class MycollectionService {
  collections: Collection[] = [];
  mycollection$ = new BehaviorSubject(null);
  count$ = new BehaviorSubject(null);

  constructor() {}
  getCollections(): Collection[] {
    return this.collections;
  }
  addCollection(collection: Collection): void {
    this.collections.push(collection);
    this.count$.next(this.collections.length);
  }
}
