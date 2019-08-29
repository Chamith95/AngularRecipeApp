import { Injectable,EventEmitter } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
import { Subject } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged =new Subject<Ingriedient[]>()

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
     this.ingredientsChanged.next(this.ingriedients.slice());
   }

   addIngredients(ingredients:Ingriedient[]){
     this.ingriedients.push(...ingredients);
     this.ingredientsChanged.next(this.ingriedients.slice());
   } 

   
}
