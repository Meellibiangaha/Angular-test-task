import { Component } from '@angular/core';

import { GetUserService } from 'core/services/get-user.service';
import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  user!: UserData | null;
  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.getUserService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
