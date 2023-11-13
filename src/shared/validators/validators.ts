import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function wrongPasswordValidator(wrongPassword: boolean): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    if (wrongPassword) {
      return { wrongPassword: true };
    }
    return null;
  };
}