import { Component, Input, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() vehicleItem: IVehicle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
