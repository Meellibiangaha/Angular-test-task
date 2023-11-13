import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { GetUserService } from 'core/services/get-user.service';

import { UserData } from 'shared/models/userData.model';
import { ProfileService } from 'shared';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private getUserService: GetUserService,
    protected profileService: ProfileService,
    ) { }

  user!: UserData | null;
  public editSwitch$ = new Subject<boolean>();

  ngOnInit(): void {
    this.getUserService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  public onEdit() {
    this.profileService.editSwitch = !this.profileService.editSwitch;
  }

}
