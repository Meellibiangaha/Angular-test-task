import { Injectable } from '@angular/core';

import { DataService } from 'core/services';
import { take } from 'rxjs';
import { UserData } from 'shared/models/userData.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private dataService: DataService) { }
    /** public get profile$() { return of({}); } */

    public editSwitch = true;

    public updateProfileData(newProfileData: UserData): void {
        this.dataService.userSubject.pipe(take(1)).subscribe((user: UserData | null) => {
            if (user) {
                const newProfile = { ...user, ...newProfileData };
                localStorage.setItem(this.dataService.USER_KEY, JSON.stringify(newProfile));
            }
        });
    }
}
