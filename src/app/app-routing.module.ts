import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component'

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path: 'shopping',
  component: LandingComponent
},{
  path: 'cart',
  component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
