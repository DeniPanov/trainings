import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ShoppingListStoreModule } from './shopping-list.store.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    ShoppingListStoreModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }
    ]),
  ],
})
export class ShoppingListModule {}
