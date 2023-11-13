import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlStatus } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ProfileService } from 'shared';

import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.less']
})
export class ProfileEditComponent {
  @Input() user!: UserData;

  protected formGroup: FormGroup;

  protected readonly submitButtonDisabled$: Observable<boolean>;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.formGroup = this.fb.group({
      first_name: this.fb.control<UserData['first_name']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      last_name: this.fb.control<UserData['last_name']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
        Validators.minLength(10),
        Validators.maxLength(255)
      ]),
      phone_number: this.fb.control<UserData['phone_number']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
        Validators.minLength(5),
        Validators.maxLength(255)
      ]),
      webSite_url: this.fb.control<UserData['webSite_url']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
      ]),
    });

    /**Проверка кнопки на валидность */
    this.submitButtonDisabled$ = this.formGroup.statusChanges.pipe(
      startWith(<FormControlStatus>'INVALID'),
      map(
        (status: FormControlStatus) =>
          (status === 'INVALID' && this.formGroup.dirty) ||
          this.formGroup.pristine,
      ),
    );
  }

  public onCancel() {
    this.profileService.editSwitch = !this.profileService.editSwitch;
  }

  public onSaveEdit() {
    this.profileService.editSwitch = !this.profileService.editSwitch;
  }

}
