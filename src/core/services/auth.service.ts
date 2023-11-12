import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

import { ADMIN_PROFILE_DATA, USER_PROFILE_DATA } from 'shared/mocks/user-profile.mock';
import { UserData } from 'shared/models/userData.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    /** сохраняю в localStorage */
    private readonly USER_KEY = 'authenticatedUser';
    /** здесь будут браться данные из localStorage, если есть */
    private userString: string | null = null;

    private usersArr: UserData[];
    private userSubject = new BehaviorSubject<UserData | null>(null);
    email = '';
    password = '';
    isLoggedIn: boolean;

    constructor(private dialog: MatDialog) {
        /**При инициализации сервиса пытаемся получить данные из localStorage */
        this.userString = localStorage.getItem(this.USER_KEY);
        const user = this.userString ? JSON.parse(this.userString) : null;
        /** передаем в Subject*/
        this.userSubject.next(user);
        this.isLoggedIn = !!this.userString;
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
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
            this.isLoggedIn = true;
            this.userString = JSON.stringify(user);
            this.userSubject.next(user);
            this.dialog.closeAll();
        }
    }

    public logout(): void {
        this.isLoggedIn = false;
        localStorage.removeItem(this.USER_KEY);
        this.userString = null;
        this.userSubject.next(null);
    }

    public getUser(): Observable<UserData | null> {
        return this.userSubject.asObservable();
    }

    /** получение из localStorage пользователя (в app component реализовал) */
    public getAuthenticatedUser(): UserData | null {
        this.isLoggedIn = !!this.userString;
        try {
            return this.userString ? JSON.parse(this.userString) : null;
        } catch (error) {
            console.error('Error parsing JSON', error);
            return null;
        }
    }
}
