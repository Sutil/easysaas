import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators {

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      if(!control.value) {
        return null
      }

      const errors = Validators.email(control)
      if(!errors) {
        return null
      }

      return { invalidEmail: true }
    }
  }

}