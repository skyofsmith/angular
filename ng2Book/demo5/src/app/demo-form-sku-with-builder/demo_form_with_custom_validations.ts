import { FormControl } from '@angular/forms'

import { AbstractControl } from '@angular/forms'
function isBlank(params: string) {
  return params.length === 0
}
export default class Validators {
  static required(c: FormControl): Object {
    return isBlank(c.value) || c.value == '' ? { required: true } : null
  }
}
