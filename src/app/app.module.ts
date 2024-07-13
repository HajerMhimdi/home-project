import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { HousingLocationComponent } from './housing-location/housing-location.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
    

    

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
