import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  fb:FormBuilder;

  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService,
    private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id =+params['id'];
          this.editMode =params['id'] !=null;
          this.initForm();
        }
      )
  }

  private initForm(){
   
    let recipeName ="";
    let recipeImagePath ='';
    let recipeDescription ='';
    let recipeIngredients =new FormArray([])

    if(this.editMode){
      const recipe =this.recipeService.getRecipe(this.id);
      recipeName =recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription =recipe.description;
 
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){  
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
   
      }
    
    }

    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'ingredients':recipeIngredients,
      'description':new FormControl(recipeDescription,Validators.required),

    })

    console.log(this.recipeForm);
  }

  onSubmit(){
    const newRecipe =new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients'])
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe)
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  get aliases() {
    return this.recipeForm.get('description') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number){
    console.log(index);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
