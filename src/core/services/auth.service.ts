import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn = true;
    public login(): void { this.isLoggedIn = true; }
    public logout(): void { this.isLoggedIn = false; }
}
