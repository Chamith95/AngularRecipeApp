import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-lsit.component.html',
  styleUrls: ['./shopping-lsit.component.css']
})
export class ShoppingLsitComponent implements OnInit ,OnDestroy {
  ingriedients:Ingriedient[]=[];

  private subscription:Subscription;

  constructor(private slService:ShoppingService) {}

  ngOnInit() {
    this.ingriedients=this.slService.getIngredients();
    this.subscription=this.slService.ingredientsChanged
        .subscribe(
          (Ingriedients:Ingriedient[])=>{
            this.ingriedients=Ingriedients;
          }
        )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); 
  }



}
