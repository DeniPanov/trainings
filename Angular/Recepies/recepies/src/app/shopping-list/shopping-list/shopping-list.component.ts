import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import * as fromShoppingList from "../store/shopping-list.state";
import * as slActions from "../store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients$: Observable<Ingredient[]>;
  private subscription: Subscription;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select(fromShoppingList.selectors.selectIngredients);
  }

  ngOnDestroy(): void {
  }

  onEditItem(index: number) {
    this.store.dispatch(new slActions.StartEdit(index));
  }
}
