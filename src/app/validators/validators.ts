import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nameValidator(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(name).test(control.value)
    return result ? null : {name: {value: control.value}}
  }
}
