import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycollectionItemComponent } from './mycollection-item.component';

describe('MycollectionItemComponent', () => {
  let component: MycollectionItemComponent;
  let fixture: ComponentFixture<MycollectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycollectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
