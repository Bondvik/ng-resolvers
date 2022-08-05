import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any>{

  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = Number(route.paramMap.get('id'))
    return this.api.getProductById(id)
  }
}
