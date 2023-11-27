import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: any = []
  loading: boolean = false


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loading = true
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data
          },
          error: (err) => {
            console.log(err)
          }
        }
      )
  }
}
