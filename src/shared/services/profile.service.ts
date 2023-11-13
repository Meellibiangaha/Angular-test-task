import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataService } from 'core/services';
import { UserData } from 'shared/models/userData.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private dataService: DataService, private _snackBar: MatSnackBar) { }
    /** public get profile$() { return of({}); } */

    /** сообщение сверху, что данные обновились */
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action,{
            /** я думаю 5-10 секунд достаточно (в задании 30 сек) */
            duration: 10000,
            verticalPosition: 'top'
          });
      }

    public editSwitch = true;

    public updateProfileData(newProfileData: UserData): void {
        this.dataService.userSubject.pipe(take(1)).subscribe((user: UserData | null) => {
            if (user) {
                const newProfile = { ...user, ...newProfileData };
                localStorage.setItem(this.dataService.USER_KEY, JSON.stringify(newProfile));
                this.openSnackBar('Profile Update', 'Close');
            }
        });
    }
}
