import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ActionsComponent } from './components/actions/actions.component';
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    DashboardComponent, 
    FooterComponent, 
    HeaderComponent, 
    HomeComponent, 
    LocationsComponent, 
    NavigationComponent, 
    SearchBarComponent, 
    SignupComponent, 
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
