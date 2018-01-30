import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LocationListingComponent } from './location-listing/location-listing.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationSimpleComponent } from './location-simple/location-simple.component';
import { ImgFallbackModule } from 'ngx-img-fallback';

import { HammertimeDirective } from './shared/directives/hammertime.directive';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
	overrides = <any>{
		// override hammerjs default configuration
		'swipe': { direction: Hammer.DIRECTION_ALL  }
	}
}

@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    LocationDetailComponent,
    LocationSimpleComponent,
    HammertimeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImgFallbackModule,
    NgbModule.forRoot()
  ],
  providers: [HttpClientModule,{
    provide: HAMMER_GESTURE_CONFIG,
	useClass: MyHammerConfig
    }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
