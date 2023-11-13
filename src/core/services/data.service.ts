import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import { ADMIN_PROFILE_DATA, USER_PROFILE_DATA } from 'shared/mocks/user-profile.mock';
import { UserData } from 'shared/models/userData.model';

@Injectable({ providedIn: 'root' })
export class DataService {

  /** сохраняю в localStorage */
  public readonly USER_KEY = 'authenticatedUser';
  /** здесь будут браться данные из localStorage, если есть */
  public userString: string | null = null;

  public usersArr: UserData[];
  public userSubject = new BehaviorSubject<UserData | null>(null);
  email = '';
  password = '';
  isLoggedIn: boolean;

  /** для проверки пароля и почты, для login-dialog */
  public wrongPassword: boolean = false;
  public wrongData: boolean = false;

  constructor(public dialog: MatDialog) {
      /**При инициализации сервиса пытаемся получить данные из localStorage */
      this.userString = localStorage.getItem(this.USER_KEY);
      const user = this.userString ? JSON.parse(this.userString) : null;
      /** передаем в Subject*/
      this.userSubject.next(user);
      this.isLoggedIn = !!this.userString;
      this.usersArr = [ADMIN_PROFILE_DATA, USER_PROFILE_DATA];
  }
}