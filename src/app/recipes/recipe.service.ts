import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('a test recipe',
      'this is some dexc',
      'https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('French fries', 20),
      ]),
    new Recipe('another test recipe',
      'this is some dexc',
      'https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',
      [
        new Ingredient('buns', 2),
        new Ingredient('meats', 2),
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}