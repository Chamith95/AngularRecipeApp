import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;
 id:number;

  constructor(private recipeService:RecipeService,private store:Store<fromShoppingList.AppState>,
      private route:ActivatedRoute,
      private router:Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params:Params)=>{
            this.id =+params['id'];
            this.recipe=this.recipeService.getRecipe(this.id);
          }
        )
  }

  onAddToShoppingList(){
    this.recipeService.addingtoshopList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  ondDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']) ;
  }
}
