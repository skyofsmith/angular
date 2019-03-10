import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms'
import skuValidator from './demo_form_with_custom_validations'
@Component({
  selector: 'demo-form-sku-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent {
  myForm: FormGroup

  sku: AbstractControl

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([Validators.required])]
      // skuValidator
    })
    this.sku = this.myForm.controls['sku']
    // add event listenner on formControl or formGroup
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value)
    })
    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form)
    })
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
