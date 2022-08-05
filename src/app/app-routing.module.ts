import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductsResolverService} from "./services/products-resolver.service";
import {ProductComponent} from "./product/product.component";
import {ProductResolverService} from "./services/product-resolver.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolverService
    }},
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolverService
    }},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
