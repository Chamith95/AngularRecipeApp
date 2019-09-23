import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
import { ShoppingService } from './shopping.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-lsit.component.html',
  styleUrls: ['./shopping-lsit.component.css']
})
export class ShoppingLsitComponent implements OnInit ,OnDestroy {
  shoppingListState:Observable<{ingredients:Ingriedient[]}>

  private subscription:Subscription;

  constructor(private slService:ShoppingService,private store:Store<{shoppingList:{ingredients:Ingriedient[]}}>) {}

  ngOnInit() {
    this.shoppingListState=this.store.select('shoppingList');
    // this.subscription=this.slService.ingredientsChanged
    //     .subscribe(
    //       (Ingriedients:Ingriedient[])=>{
    //         this.ingriedients=Ingriedients;
    //       }
    //     )
  }



  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }



}
