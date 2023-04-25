import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FamousFoodComponent } from './components/foods/famous-food/famous-food.component';
import { ChefComponent } from './components/foods/chef/chef.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home',    component: HomeComponent },
  { path: 'fmsfood', component: FamousFoodComponent },
  { path: 'chef',    component: ChefComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'sign_up', component: SignUpComponent },
  // { path: 'sign_up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
