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
        Validators.minLength(5),
        Validators.maxLength(255)
      ]),
      phone_number: this.fb.control<UserData['phone_number']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
        Validators.minLength(18),
        Validators.maxLength(18)
      ]),
      webSite_url: this.fb.control<UserData['webSite_url']>('', []),
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
    
    /** для phone маски */
    this.prevPhoneInputValue = '';
  }

  public prevPhoneInputValue: string;
  public onChangePhone() {
    let formattedValue = '';
    // this.prevPhoneInputValue = this.formGroup.controls['phone_number'].value;
  
    let numericValue = this.formGroup.controls['phone_number'].value.replace(/[^\d]/g, '');
    numericValue = (numericValue[0] === '7') ?  numericValue.substring(1) : numericValue;
    console.log(this.prevPhoneInputValue);
    console.log(numericValue);
    //для вида +7_(***)_***-**-**
    if (this.prevPhoneInputValue.length < numericValue.length) {
      if (numericValue.length < 3) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}`;
      } else if (numericValue.length === 3) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) `;
      } else if (numericValue.length < 6) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}`;
      } else if (numericValue.length === 6) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-`;
      } else if (numericValue.length < 8) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 8)}`;
      } else if (numericValue.length === 8) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 8)}-`;
      } else if (numericValue.length <= 10) {
        formattedValue = `+7 (${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 8)}-${numericValue.substring(8)}`;
      }
      this.formGroup.controls['phone_number'].setValue(formattedValue);
    }
    this.prevPhoneInputValue = numericValue;
    
    
  }

  public onCancel() {
    this.profileService.editSwitch = !this.profileService.editSwitch;
  }

  public onSaveEdit() {
    this.profileService.updateProfileData(this.formGroup.getRawValue());
    this.profileService.editSwitch = !this.profileService.editSwitch;
  }

}