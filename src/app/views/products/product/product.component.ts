import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType
  loading: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    }
  }

  ngOnInit() {
    this.loading = true

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .pipe(
            tap(() => {
              this.loading = false
            })
          )
          .subscribe({
            next: (data) => {
              this.product = data
            },
            error: (err) => {
              console.log(err)
              this.router.navigate(['/'])
            }
          })
      }
    })
  }
}
