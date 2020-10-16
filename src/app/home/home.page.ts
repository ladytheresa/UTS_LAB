import { Component } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item: Item[];

  constructor(
    private itemService: ItemService
  ) {}

  ionViewWillEnter(){
    this.item = this.itemService.getAllItems();
  }

  ngOnInit(){
    //this.IonViewWillEnter();
  }



  visible: boolean = true;
  toggle(): void {
  this.visible = !this.visible;
  }

}
