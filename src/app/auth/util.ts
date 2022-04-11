import { AbstractControl, ValidationErrors } from '@angular/forms';

//Email address must have at least 6 symbols followed by "@" + "gmail" + "bg|com"
export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null;
  }

  if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
    return {
      email: true,
    };
  }
  return null;
}
