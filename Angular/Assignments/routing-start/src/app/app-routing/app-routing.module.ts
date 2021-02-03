import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFounfComponent } from '../page-not-founf/page-not-founf.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { AuthGuard } from '../auth.guard';
import { CanDeactivateGuard } from '../servers/edit-server/can-deactivate.guard';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UsersComponent, children: [
  {path: ":id/:name", component: UsersComponent}
  ]},
  {path: "servers", canActivateChild: [AuthGuard], component: ServersComponent, children: [
    {path: ":id", component: ServerComponent},
    {path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ]},
  {path: "not-found", component: PageNotFounfComponent},
  {path: "**", redirectTo: "/not-found"},
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
