import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { EditproductComponent } from './editproduct/editproduct.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  loadedItem: Item;
  item: Item[];

  constructor(
    private itemService: ItemService,
    private modalCtrl: ModalController
  ) {}
  
  ngOnInit() {
    //this.IonViewWillEnter();
  }

  ionViewWillEnter(){
    this.item = this.itemService.getAllItems();
  }
  async presentModal(currentid) {
    const id = currentid;
    this.loadedItem = this.itemService.getItem(id);
    
    //console.log(this.loadedItem.type);
    //console.log(this.loadedItem.name);
    //console.log(this.loadedItem.id);

    const modal = await this.modalCtrl.create({
      component: EditproductComponent,
      componentProps: {
        'id':id
      }
    });

    modal.onDidDismiss().then((resultData) => {});

    return await modal.present();
  }

  /*deleteItem(index){
    this.item.splice(index, 1);
  }*/
  deleteItem(itemi){
    this.itemService.deleteItem(itemi);
    this.ionViewWillEnter();
    //this.item.splice(itemi.Length, 1);
  }

}
