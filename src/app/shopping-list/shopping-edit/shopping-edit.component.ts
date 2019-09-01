import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { constructor } from 'q';
import { Ingriedient } from 'src/app/shared/ingreidient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f',{static:false}) slForm:NgForm;

  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingriedient;

  constructor(private shoppinService:ShoppingService) { }

  ngOnInit() {
   this.subscription=this.shoppinService.startedEditing
            .subscribe(
              (index:number)=>{
                this.editedItemIndex=index;
                this.editMode=true; 
                this.editedItem=this.shoppinService.getIngredient(index); 
                this.slForm.setValue({
                  name: this.editedItem.name,
                  amount:this.editedItem.amount
                })
              }
            );
  }

  onAddItem(form:NgForm){
    const value =form.value;
    const newIngredient =new Ingriedient(value.name,value.amount);
    if(this.editMode){
      this.shoppinService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.shoppinService.addIngredient(newIngredient )
    }
    this.editMode =false;
    form.reset()
  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnClear(){
    this.slForm.reset()
    this.editMode=false;
  }

  onDelete(){
    this.shoppinService.deleteIngredient(this.editedItemIndex);
    this.OnClear( )
  }
}
