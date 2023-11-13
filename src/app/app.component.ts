import { Component } from '@angular/core';

import { GetUserService } from 'core/services/get-user.service';
import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  authenticatedUser!: UserData | null;

  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.authenticatedUser = this.getUserService.getAuthenticatedUser();
  }
}
