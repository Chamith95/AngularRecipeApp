import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingriedient } from 'src/app/shared/ingreidient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopiing-list.actions'
import * as fromShoppingList from '../store/shopping-list.reducers'
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  

 
  @ViewChild('f',{static:false}) slForm:NgForm;

  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingriedient;

  constructor(private shoppinService:ShoppingService,private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription=this.store.select('shoppingList')
        .subscribe(
          data =>{
            if(data.editedIngredientIndex >-1){
              this.editedItem=data.editedIngredient;
              this.editMode=true;
              this.slForm.setValue({
                name: this.editedItem.name,
                amount:this.editedItem.amount
              })
            }
            else{
              this.editMode=false;
            }
          }
        )

  }

  onAddItem(form:NgForm){
    const value =form.value;
    const newIngredient =new Ingriedient(value.name,value.amount);
    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient:newIngredient}))
    }else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
    }
    this.editMode =false;
    form.reset()
  
  }



  OnClear(){
    this.slForm.reset()
    this.editMode=false;
  }

  onDelete(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    this.OnClear( )
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit())
    this.subscription.unsubscribe();

  } 
}
