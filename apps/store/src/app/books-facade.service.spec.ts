import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import * as fromApp from './app.reducer';

import { BooksFacadeService } from './books-facade.service';
import { CartEffects } from './ngrx-store/cart.effects';

describe('BooksFacadeService', () => {
  let service: BooksFacadeService;
  let store: Store<fromApp.AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksFacadeService],
      imports: [
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(BooksFacadeService);
    store = TestBed.inject(Store);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
