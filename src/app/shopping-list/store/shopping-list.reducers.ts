import { Action } from '@ngrx/store';
import { Ingriedient } from '../../shared/ingreidient.model';
import * as ShoppingListActions from './shopiing-list.actions'



export interface State {
    ingredients:Ingriedient[],
    editedIngredient:Ingriedient,
    editedIngredientIndex:number
}

const initialState:State ={
    ingredients:[
        new Ingriedient('Apples',5),
        new Ingriedient('Tomato',10)
    ],
    editedIngredient:null,
    editedIngredientIndex:-1    
}

export function shoppingListReducer(state =initialState,action:ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[...state.ingredients,action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:[...state.ingredients,...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient=state.ingredients[state.editedIngredientIndex]
            const updatedIngredient={
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients =[...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return{
                ...state,
                ingredients:ingredients,
                editedIngredient:null,
                editedIngredientIndex:-1 
            };
        case ShoppingListActions.DELETE_INGREDIENT:
                const oldIngredients =[...state.ingredients];
                oldIngredients.splice(state.editedIngredientIndex,1);
            return{
                ...state,
                ingredients:oldIngredients
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient:editedIngredient,
                editedIngredientIndex:action.payload
 
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient:null,
                editedIngredientIndex:-1
            }
        default:
            return state
    }

    return state; 
}