import { Component, OnInit } from '@angular/core';
import {IProduct} from "../interfaces/iproduct";
import {ActivatedRoute, Params} from "@angular/router";
import {ApiService} from "../services/api.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   switchMap((params: Params) => {
    //     const id = params['id']
    //     return this.api.getProductById(id)
    //   })
    // ).subscribe((data) => {
    //   this.product = data;
    // })
    this.activatedRoute.data.subscribe((response: any) => {
      this.product = response.product;
    })
  }

}
