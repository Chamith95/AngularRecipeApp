import { Injectable,EventEmitter } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
;

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged =new EventEmitter<Ingriedient[]>()

  ingriedients:Ingriedient[]=[
    new Ingriedient('Apples',5),
    new Ingriedient('Tomato',10)
  ];
  
  constructor() { }

   getIngredients(){
     return this.ingriedients.slice();
   }

   addIngredient(ingredient:Ingriedient){
     this.ingriedients.push(ingredient);
     this.ingredientsChanged.emit(this.ingriedients.slice());
   }

   addIngredients(ingredients:Ingriedient[]){
     this.ingriedients.push(...ingredients);
     this.ingredientsChanged.emit(this.ingriedients.slice());
   } 

   
}
