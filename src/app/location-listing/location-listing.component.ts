import { Component, OnInit } from '@angular/core';
import { LocationService } from "../shared/services/location.service";

import { Location } from "../models";

@Component({
  selector: 'location-listing',
  templateUrl: './location-listing.component.html',
  styleUrls: ['./location-listing.component.css'],
  providers: [ LocationService ]
})
export class LocationListingComponent implements OnInit {

  locations: Location[];

  constructor(private _locationService: LocationService) {

  }

	ngOnInit() {
		this._locationService.getLocations().subscribe(
			data => {
				this.locations = data;
			}
		);
	}

}
