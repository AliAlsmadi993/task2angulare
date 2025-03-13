import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:category', component: ProductListComponent },

  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'categories', component: CategoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
