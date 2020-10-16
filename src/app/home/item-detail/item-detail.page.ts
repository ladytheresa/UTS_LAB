import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  loadedItem: Item;

  constructor(    
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {return;}
      const id = paramMap.get('id');
      this.loadedItem = this.itemService.getItem(id);
    });
  }

}
