import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItemTypeEnum} from '@enums/menu-item-type.enum';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MenuHelperService} from './services/menu-helper.service';
import {IUserModel} from '@api/auth/res/user.interface';
import {userSelector} from '@pages/auth/store/selectors/auth-login.selectors';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  menuItemTypeEnum = MenuItemTypeEnum;
  user$: Observable<IUserModel>;

  constructor(
    public helperService: MenuHelperService,
    public router: Router,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  logOut() {
    localStorage.clear();
    window.location.href = window.location.origin;
  }

  initializeValues() {
    this.user$ = this.store.pipe(select(userSelector));
  }
}


