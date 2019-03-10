import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms'

@Component({
  selector: 'demo-form-ng-model',
  templateUrl: './demo-form-ng-model.html',
  styleUrls: ['./demo-form-ng-model.css']
})
export class DemoFormNgModelComponent {
  myForm: FormGroup
  productName: string
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      productName: ['', Validators.required]
    })
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
