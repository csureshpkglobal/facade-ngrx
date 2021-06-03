import { Component, OnInit } from '@angular/core';
import { Collection } from '../../collection.model';
import { MycollectionService } from '../../mycollection.service';

@Component({
  selector: 'app-mycollection-item',
  templateUrl: './mycollection-item.component.html',
  styleUrls: ['./mycollection-item.component.css'],
})
export class MycollectionItemComponent implements OnInit {
  collections: Collection[] = [];

  constructor(private mycollectionService: MycollectionService) {}
  ngOnInit(): void {
    this.collections = this.mycollectionService.getCollections();
  }
}
