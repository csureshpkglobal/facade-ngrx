import * as collectionActions from '../ngrx-store/collection.actions';
import { Book } from '../book.model';
import { Collection } from '../collection.model';
describe('CollectionActions', () => {
  let book: Book;
  let collection: Collection;
  beforeEach(() => {
    book = {
      id: '1',
      title: 'title',
      imageLink: '',
      description: '',
      authors: '',
      ratingsCount: '',
      publisher: '',
      language: '',
      pageCount: '',
    };
    collection = {
      title: '',
      imgLink: '',
      description: '',
      authors: '',
      name: '',
      email: '',
      phone: 0,
      address: '',
    };
  });
  it('should create collection actions', () => {
    expect(collectionActions).toBeTruthy();
  });
  it('should create AddBook Action', () => {
    const action = new collectionActions.AddBook(book);
    expect(action.type).toBeTruthy(collectionActions.ADD_BOOK);
  });
  it('should create AddCollection Action', () => {
    const action = new collectionActions.AddCollection(collection);
    expect(action.type).toBeTruthy(collectionActions.ADD_COLLECTION);
  });
});
