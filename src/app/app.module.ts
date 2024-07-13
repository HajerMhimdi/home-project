import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import routeConfig from './routes';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
    

    

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
