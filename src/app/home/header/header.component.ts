import { Component } from '@angular/core';

import { AuthService } from 'core/services';
import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent{
  user!: UserData | null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
