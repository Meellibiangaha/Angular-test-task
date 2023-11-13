import { Injectable } from '@angular/core';

import { UserData } from 'shared/models/userData.model';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class FindService {
  constructor(private dataService: DataService) { }

  /** Функция эмулирует API, где мы ищем совпадения с БД (mocks в моём случае) */
  public findUser(email: string, password: string): UserData | undefined {
    return this.dataService.usersArr.find(user => user.email === email && user.password === password);
  }
  /** Тоже самое, для диалога авторизации */
  public findDifferences(email: string, password: string): boolean {
    let differencesLog;
    if (this.dataService.usersArr.find(user => user.email === email && user.password !== password)) {
      this.dataService.wrongPassword = true;
    }
    else {
      this.dataService.wrongPassword = false;
    }
    return this.dataService.wrongPassword;
  }

}