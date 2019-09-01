import { Injectable,EventEmitter } from '@angular/core';
import { Ingriedient } from '../shared/ingreidient.model';
import { Subject } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged =new Subject<Ingriedient[]>();
  startedEditing =new Subject<number>()

  ingriedients:Ingriedient[]=[
    new Ingriedient('Apples',5),
    new Ingriedient('Tomato',10)
  ];
  
  constructor() { }

   getIngredients(){
     return this.ingriedients.slice();
   }

   getIngredient(index:number){
     return this.ingriedients[index];
   }

   addIngredient(ingredient:Ingriedient){
     this.ingriedients.push(ingredient);
     this.ingredientsChanged.next(this.ingriedients.slice());
   }

   addIngredients(ingredients:Ingriedient[]){
     this.ingriedients.push(...ingredients);
     this.ingredientsChanged.next(this.ingriedients.slice());
   } 

   updateIngredient(index:number,newIngredient:Ingriedient){
     this.ingriedients[index]=newIngredient;
     this.ingredientsChanged.next(this.ingriedients.slice());
   }

   deleteIngredient(index:number){
     this.ingriedients.splice(index,1);
     this.ingredientsChanged.next(this.ingriedients.slice())
   }
   
}
