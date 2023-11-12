import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';

import { ADMIN_PROFILE_DATA, USER_PROFILE_DATA } from 'shared/mocks/user-profile.mock';
import { UserData } from 'shared/models/userData.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private usersArr: UserData[];
    private userSubject = new Subject<UserData>();
    email = '';
    password = '';
    isLoggedIn = true;

    constructor(private dialog: MatDialog) {
        this.usersArr = [ADMIN_PROFILE_DATA, USER_PROFILE_DATA];
    }

    /** Функция эмулирует API, где мы ищем совпадения с БД (mocks в моём случае) */
    private findUser(email: string, password: string): UserData | undefined {
        return this.usersArr.find(user => user.email === email && user.password === password);
    }

    /** К сожалению, из-за FormGroup'а пришлось тип 'any' ставить */
    public login(obj: any): void {
        const { email, password } = obj;
        const user = this.findUser(email, password);

        if (user) {
            this.isLoggedIn = true;
            this.userSubject.next(user);
            this.dialog.closeAll();
        }
    }

    public logout(): void {
        this.isLoggedIn = false;
    }

    public getUser(): Observable<UserData> {
        return this.userSubject.asObservable();
    }
}
