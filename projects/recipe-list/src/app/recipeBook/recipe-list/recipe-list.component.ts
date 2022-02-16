import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipeBook/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [new Recipe('test','test recipe',
  'https://images.unsplash.com/photo-1640622658799-54e6039d189b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
  ,new Recipe('nexttest','second test recipe',
  'https://images.unsplash.com/photo-1640622658799-54e6039d189b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')]
  constructor() { }
  
  ngOnInit(): void {
  }

}
