import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private item: Item[] = [
    {
      id:'Item04',
      type:'Motherboard',
      name:'MSI',
      model:'MPG X570',
      price:800000,
      imageUrl:'https://c1.neweggimages.com/ProductImage/13-144-261-V07.jpg',
      stock:15,
      //motherboard
      chipset:'AMD X570',
      brand:'Ryzen',
      //cpu
      baseclock:'',
      boostclock:'',
      core:null,
      thread:null,
      //ram
      speed:null,
      size:null
    },{
      id:'Item01',
      type:'CPU',
      name:'Intel',
      model:'I7-7700HQ',
      price:750000,
      imageUrl:'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/28/4849956/4849956_bcc10dda-0403-4562-8d14-bb4ad67ca944_700_700.jpg',
      stock:30,
      chipset:'',
      brand:'',
      baseclock:'2.80 GHz',
      boostclock:'~2.8 GHz',
      core:8,
      thread:5,
      speed:null,
      size:null
    },
    {
      id:'Item02',
      type:'GPU',
      name:'NVIDIA',
      model:'GeForce GTX 1050Ti',
      price:800000,
      imageUrl:'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/14/26847810/26847810_0528e05b-4e59-46cf-9d88-11712d5b487b_700_700.png',
      stock:30,
      chipset:'',
      brand:'',
      baseclock:'',
      boostclock:'',
      core:null,
      thread:null,
      speed:null,
      size:null
    },
    {
      id:'Item03',
      type:'RAM',
      name:'Corsair',
      model:'DDR3',
      price:600000,
      imageUrl:'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/18/1361407/1361407_eee8bc79-05b0-4daf-a3b2-eb68eb6e6a25_700_700',
      stock:15,
      chipset:'',
      brand:'',
      baseclock:'',
      boostclock:'',
      core:null,
      thread:null,
      speed:16384,
      size:8
    },
    {
      id:'Item05',
      type:'GPU',
      name:'NVIDIA',
      model:'GeForce GTX 1080Ti',
      price:1000000,
      imageUrl:'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/14/26847810/26847810_0528e05b-4e59-46cf-9d88-11712d5b487b_700_700.png',
      stock:0,
      chipset:'',
      brand:'',
      baseclock:'',
      boostclock:'',
      core:null,
      thread:null,
      speed:null,
      size:null
    }
  ];

  constructor() { }

  getAllItems(){
    return [...this.item];
  }
  getItem(id: string){
    return {...this.item.find (item => {
      return item.id === id;
    })};
  }

  deleteItem(itemi: Item){
    this.item = this.item.filter(item=>{
      return item != itemi;
    })
  }

  addItem(form: NgForm) {
    this.item.push({
      id:'Item0'+(this.item.length+1),
      type:form.value.type,
      name:form.value.name,
      model:form.value.model,
      price:form.value.price,
      imageUrl:form.value.imageUrl,
      stock:form.value.stock,
      chipset:form.value.chipset,
      brand:form.value.brand,
      baseclock:form.value.baseclock,
      boostclock:form.value.boostclock,
      core:form.value.core,
      thread:form.value.thread,
      speed:form.value.speed,
      size:form.value.size
    });
  }

  editItem(form: FormGroup, id: string) {
    let temporary = this.item.map((itemi) => {
      if (itemi.id === id) {
        return {
          id:id,
          type:form.value.type,
          name:form.value.name,
          model:form.value.model,
          price:form.value.price,
          imageUrl:form.value.imageUrl,
          stock:form.value.stock,
          chipset:form.value.chipset,
          brand:form.value.brand,
          baseclock:form.value.baseclock,
          boostclock:form.value.boostclock,
          core:form.value.core,
          thread:form.value.thread,
          speed:form.value.speed,
          size:form.value.size
        };
      }
      return itemi;
    });
    this.item = [...temporary];
  }

}
