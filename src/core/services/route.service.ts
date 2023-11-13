import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteService {
  constructor(private router: Router){}

  public logOutRedirect(): void{
    this.router.navigate(['/home']);
  }
}