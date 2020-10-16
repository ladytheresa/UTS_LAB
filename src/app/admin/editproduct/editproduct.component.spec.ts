import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { EditproductComponent } from './editproduct.component';

describe('EditproductComponent', () => {
  let component: EditproductComponent;
  let fixture: ComponentFixture<EditproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
