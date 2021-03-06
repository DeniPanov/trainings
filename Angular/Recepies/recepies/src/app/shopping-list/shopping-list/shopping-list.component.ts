import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
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
    private shoppingListService: ShoppingService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select(fromShoppingList.selectors.selectIngredients);

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new slActions.StartEdit(index));
  }
}
