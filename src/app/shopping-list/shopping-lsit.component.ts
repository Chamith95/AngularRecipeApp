import { Component, OnInit } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-lsit.component.html',
  styleUrls: ['./shopping-lsit.component.css']
})
export class ShoppingLsitComponent implements OnInit {
  ingriedients:Ingriedient[]=[
    new Ingriedient('Apples',5),
    new Ingriedient('Tomato',10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingreidient:Ingriedient){
    this.ingriedients.push(ingreidient);
  }

}
