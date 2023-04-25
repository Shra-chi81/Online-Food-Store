import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FamousFoodComponent } from './components/foods/famous-food/famous-food.component';
import { ChefComponent } from './components/foods/chef/chef.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FooterComponent } from './components/auth/footer/footer.component';
import { FoodCollectionComponent } from './components/foods/food-collection/food-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FamousFoodComponent,
    ChefComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    HowItWorksComponent,
    FooterComponent,
    FoodCollectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
