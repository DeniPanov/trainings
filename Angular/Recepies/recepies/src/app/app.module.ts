import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
