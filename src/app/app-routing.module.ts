import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticatedGuard],
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthenticatedGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
