import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductsComponent } from './products/products.component';

import {ProductsModule, routes as chilRoutes} from './products/products.module';
import {AuthService} from './auth.service';
import { AUTH_PROVIDERS } from './auth.service';
import {LoggedInGuard} from './logged-in.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch : 'full'},
  {path: 'contactus', redirectTo: 'contact'},


  {path: 'login', component: LoginComponent},

  {path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]},

  //nested
  {path: 'products',
    component: ProductsComponent,
  children: chilRoutes},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsModule,
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
