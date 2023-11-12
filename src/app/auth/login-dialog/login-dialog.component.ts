import { Component, Inject } from '@angular/core';
import { FormControlStatus, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';

import { Observable, map, startWith } from 'rxjs';

import { AuthService } from 'core/services';

import { UserData } from 'shared/models/userData.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})

export class LoginDialogComponent {

  /** formGroup: FormGroup; выдавал ошибку, скорее всего из-за версии*/
  protected formGroup: FormGroup<any>;
  
  protected readonly submitButtonDisabled$: Observable<boolean>;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.formGroup = this.fb.group({
      email: this.fb.control<UserData['email']>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<UserData['password']>('', [
        Validators.required,
        Validators.pattern(/[\S]/),
        Validators.minLength(5)
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onClose(){
    this.dialogRef.close();
  }

  public onCancel(){
    this.dialogRef.close();
  }

  public onSubmith(){
    this.authService.login(this.formGroup.getRawValue());
  }
  
}
