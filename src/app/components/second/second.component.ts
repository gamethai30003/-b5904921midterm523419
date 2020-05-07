import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    productid: new FormControl(''),
    productname: new FormControl(''),
    productdetail: new FormControl(''),
    quantity: new FormControl(''),
    price:new FormControl(''),
    productType: new FormControl('')
  
  });
  get quantity() {
    return this.productForm.get('quantity'); 
  }

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }
 
}
