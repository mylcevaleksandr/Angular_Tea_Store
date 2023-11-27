import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function customValidator(data: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result: boolean = new RegExp(data).test(control.value)
    return result ? null : {data: {value: control.value}}
  }
}
