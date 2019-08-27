import { Component, OnInit } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-lsit.component.html',
  styleUrls: ['./shopping-lsit.component.css']
})
export class ShoppingLsitComponent implements OnInit {
  ingriedients:Ingriedient[]=[
  ];

  constructor(private slService:ShoppingService) {}

  ngOnInit() {
    this.ingriedients=this.slService.getIngredients();
    this.slService.ingredientsChanged
        .subscribe(
          (Ingriedients:Ingriedient[])=>{
            this.ingriedients=Ingriedients;
          }
        )
  }



}
