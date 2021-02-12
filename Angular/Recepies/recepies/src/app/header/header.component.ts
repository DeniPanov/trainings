import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated: boolean = false;
  collapsed = true;
  
  constructor(private dsService: DataStorageService, private authService: AuthService) { }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.userSubscription = this.authService.userSub.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
