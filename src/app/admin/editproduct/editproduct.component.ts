import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/item.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss'],
})
export class EditproductComponent implements OnInit {
  @Input() id: string;
  /*@Input() name: string;
  @Input() type: string;
  @Input() model: string;
  @Input() price: number;
  @Input() imageUrl: string;
  @Input() stock: number;
  @Input() chipset: string;
  @Input() brand: string;
  @Input() baseclock: string;
  @Input() boostclock: string;
  @Input() core: number;
  @Input() thread: number;
  @Input() speed: number;
  @Input() size: number;*/

  form: FormGroup;
  item: Item;
  loadedItem: Item;

  constructor(
    private itemService: ItemService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadedItem = this.itemService.getItem(this.id);
    //var DATYPE = this.type;
    console.log(this.id);
    
    this.form = new FormGroup({
    type: new FormControl('', {
      updateOn: "submit",
      validators: [Validators.required]
    }),
    name: new FormControl('', {
      updateOn: "submit",
      validators: [Validators.required]
    }),
    model: new FormControl('', {
      updateOn: "submit",
      validators: [Validators.required]
    }),
    id: new FormControl('', {
      updateOn: "submit"
    }),
    price: new FormControl(null, {
      updateOn: "submit",
      validators: [Validators.required]
    }),
    imageUrl: new FormControl('', {
      updateOn: "submit",
      validators: [Validators.required]
    }), 
    stock: new FormControl(null, {
      updateOn: "submit",
      validators: [Validators.required]
    }),
    chipset: new FormControl('', {
      updateOn: "submit"
    }),
    brand: new FormControl('', {
      updateOn: "submit"
    }),
    baseclock: new FormControl('', {
      updateOn: "submit"
    }),
    boostclock: new FormControl('', {
      updateOn: "submit"
    }),
    core: new FormControl(null, {
      updateOn: "submit",
    }),
    thread: new FormControl(null, {
      updateOn: "submit"
    }),
    speed: new FormControl(null, {
      updateOn: "submit"
    }),
    size: new FormControl(null, {
      updateOn: "submit"
    })
  })
  ;}

  onSubmit(form: FormGroup) {
    console.log(this.form);
    if(this.form.valid){
      this.itemService.editItem(this.form, this.id);
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }
  noSubmit(e) {
    e.preventDefault();
  }


}