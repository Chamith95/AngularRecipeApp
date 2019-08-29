import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingLsitComponent } from './shopping-list/shopping-lsit.component';
import { Z_FULL_FLUSH } from 'zlib';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes',
    component:RecipesComponent,
    children:[
      {
        path:'',
        component:RecipeStartComponent
      },
      {
        path:'new',
        component:RecipeEditComponent
      },
      {
        path:':id',
        component:RecipeDetailComponent
      },
      {
        path:':id/edit',
        component:RecipeEditComponent
      }
    ]
  },
  {
    path:'shopping-list',
    component:ShoppingLsitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
