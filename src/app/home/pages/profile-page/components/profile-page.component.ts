import { Component, OnInit } from '@angular/core';

import { AuthService } from 'core/services';
import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  user: UserData | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
