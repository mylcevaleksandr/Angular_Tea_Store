import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {nameValidator} from "../../../validators/validators";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  signInForm = this.fb.group({
    name: ['', {
      validators: [Validators.required, nameValidator('^[А-Яа-яA-za-z\s]+$')],
      updateOn: 'blur'
    }],
    last_name: ['', {
      validators: [Validators.required, nameValidator('^[А-Яа-яA-za-z\s]+$')],
      updateOn: 'blur'
    }],
    phone: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    country: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    zip: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    product: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    address: ['', {
      validators: [Validators.required,],
      updateOn: 'blur'
    }],
    comment: [""],
  })

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

  get comment() {
    return this.signInForm.get('last_name')
  }

  private subscription: Subscription | null = null

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
    this.productService.sendOrder(this.signInForm.getRawValue()
    )
    //   .subscribe(response => {
    //     console.log(response)
    //     if (response.success && !response.message){
    //       alert("Thank You!");
    //
    //     }else {
    //       alert('Ошибка!')        }
    //   })
// this.signInForm.reset()

  }
}
