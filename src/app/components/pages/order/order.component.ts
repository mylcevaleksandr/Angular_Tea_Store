import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {customValidator} from "../../../validators/validators";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  signInForm = this.fb.group({
    name: ['', {
      validators: [Validators.required, customValidator('^[А-Яа-яA-za-z\s]+$')]
    }],
    last_name: ['', {
      validators: [Validators.required, customValidator('^[А-Яа-яA-za-z\s]+$')]
    }],
    phone: ['', {
      validators: [Validators.required, customValidator('^\\+?\\d{11}$')]
    }],
    country: ['', {
      validators: [Validators.required]
    }],
    zip: ['', {
      validators: [Validators.required]
    }],
    product: [''],
    address: ['', {
      validators: [Validators.required, customValidator('^[a-zA-Z0-9\\s-/]+$')]
    }],
    comment: [""],
  }, {updateOn: 'blur'})

  get name() {
    return this.signInForm.get('name')
  }

  get last_name() {
    return this.signInForm.get('last_name')
  }

  get phone() {
    return this.signInForm.get('phone')
  }

  get country() {
    return this.signInForm.get('country')
  }

  get zip() {
    return this.signInForm.get('zip')
  }

  get product() {
    return this.signInForm.get('product')
  }

  get address() {
    return this.signInForm.get('address')
  }

  private subscription: Subscription | null = null

  public orderSuccess: boolean = false
  public orderError: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['product']) {
        this.signInForm.patchValue({product: params['product']})
        this.product?.disable()
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public createOrder() {
    Object.keys(this.signInForm.controls).forEach(field => {
      const control = this.signInForm.get(field);
      control?.markAsTouched({onlySelf: true});
    });
    this.productService.sendOrder(this.signInForm.getRawValue())
      .subscribe(response => {
        if (response.success && !response.message) {
          this.orderSuccess = true
        } else {
          this.orderError = true
          setTimeout(() => {
            this.orderError = false
          }, 3000)
        }
      })
  }
}
