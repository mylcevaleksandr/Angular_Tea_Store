import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  public formValues = {
    productTitle: "",
    address: "",
    phone: ""
  }
  private subscription: Subscription | null = null

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['product']) {
        console.log(params)
        // this.formValues.productTitle = params['product']
      }
    })
  }
}
