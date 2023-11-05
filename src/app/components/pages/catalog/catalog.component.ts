import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewInit {
  public products: any = []
   loading:boolean=false


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
          console.log(this.products)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  ngAfterViewInit() {
    console.log(this.products)

  }

}
