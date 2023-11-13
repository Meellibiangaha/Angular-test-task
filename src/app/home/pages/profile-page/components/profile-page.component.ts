import { Component, OnInit } from '@angular/core';

import { GetUserService } from 'core/services/get-user.service';
import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  constructor(private getUserService: GetUserService) { }

  user!: UserData | null;
  editSwitch = true;

  ngOnInit(): void {
    this.getUserService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  public onEdit() {
    this.editSwitch = !this.editSwitch;
  }
}
