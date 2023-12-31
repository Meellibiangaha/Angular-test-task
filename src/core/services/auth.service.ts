import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { FindService } from './find.service';
import { RouteService } from './route.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
        private dataService: DataService,
        private findService: FindService,
        private routeService: RouteService
        ){}


    /** К сожалению, из-за FormGroup'а пришлось тип 'any' ставить */
    public login(obj: any): void {
        const { email, password } = obj;
        const user = this.findService.findUser(email, password);

        if (user) {
            localStorage.setItem(this.dataService.USER_KEY, JSON.stringify(user));
            this.dataService.isLoggedIn = true;
            this.dataService.userString = JSON.stringify(user);
            this.dataService.userSubject.next(user);
            this.dataService.dialog.closeAll();
        }
        else {
            this.findService.findDifferences(email, password);
        }
    }

    public logout(): void {
        this.dataService.isLoggedIn = false;
        localStorage.removeItem(this.dataService.USER_KEY);
        this.dataService.userString = null;
        this.dataService.userSubject.next(null);

        this.routeService.logOutRedirect();
    }
}
