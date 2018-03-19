import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LocationListingComponent } from './location-listing/location-listing.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationSimpleComponent } from './location-simple/location-simple.component';
import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    LocationDetailComponent,
    LocationSimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImgFallbackModule,
	ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
