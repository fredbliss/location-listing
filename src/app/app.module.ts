import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LocationListingComponent } from './location-listing/location-listing.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [LocationListingComponent]
})
export class AppModule { }
