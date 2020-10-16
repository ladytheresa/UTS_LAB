import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  data: any;
  isSubmitted = false;
  
  ngOnInit() {
  }

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
    this.data = {
    id:'',
    type:'',
    name:'',
    model:'',
    price:null,
    imageUrl:'',
    stock:null,
    //motherboard
    chipset:'',
    brand:'',
    //cpu
    baseclock:'',
    boostclock:'',
    core:null,
    thread:null,
    //ram
    speed:null,
    size:null
    };
  }

  onSubmit(myForm: NgForm) {
    this.isSubmitted = true;
    if(myForm.valid){
      //console.log('onSubmit');
      //console.log(myForm.value);
      this.itemService.addItem(myForm);
      this.router.navigate(["/admin"]);

    }
  }

  noSubmit(e) {
    e.preventDefault();
  }
}
