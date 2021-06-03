import { TestBed } from '@angular/core/testing';
import { Collection } from './collection.model';

import { MycollectionService } from './mycollection.service';

describe('MycollectionService', () => {
  let service: MycollectionService;
  let collection: Collection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycollectionService);
    collection = {
      title: 'angular',
      description: 'desc',
      imgLink: '/',
      authors: 'authors',
      name: 'name',
      email: 'email',
      phone: 9876543210,
      address: 'address',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have 0 collections to start', () => {
    expect(service.collections.length).toEqual(0);
  });
  it('should add a collection when addCollection is called', () => {
    service.addCollection(collection);

    expect(service.collections.length).toEqual(1);
  });
});
