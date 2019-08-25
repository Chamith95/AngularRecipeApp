import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { constructor } from 'q';
import { Ingriedient } from 'src/app/shared/ingreidient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput',{static: false}) nameInputRef:ElementRef;
 @ViewChild('amountInput',{static: false}) amountInputRef:ElementRef;

 @Output() ingriedientAdded =new EventEmitter<{name:string,amount:number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingriedient(ingName,ingAmount);
    this.ingriedientAdded.emit(newIngredient);
  }

}
