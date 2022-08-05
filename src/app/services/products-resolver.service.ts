import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "./api.service";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any>{

  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.api.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    )
  }
}
