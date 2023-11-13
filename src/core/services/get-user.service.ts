import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserData } from 'shared/models/userData.model';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class GetUserService {
  constructor(private dataService: DataService) { }

  public getUser(): Observable<UserData | null> {
    return this.dataService.userSubject.asObservable();
}

/** получение из localStorage пользователя (в app component реализовал) */
public getAuthenticatedUser(): UserData | null {
    this.dataService.isLoggedIn = !!this.dataService.userString;
    try {
        return this.dataService.userString ? JSON.parse(this.dataService.userString) : null;
    } catch (error) {
        console.error('Error parsing JSON', error);
        return null;
    }
}
}