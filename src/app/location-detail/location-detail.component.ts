import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { Location } from '../models/location';
import { environment } from "../../environments/environment";

const { domain, apiUrl, assetsUrl } = environment;

@Component({
  selector: 'location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  providers: [NgSwitch]
})
export class LocationDetailComponent implements OnInit {

	@Input() location: Location;
	apibase = apiUrl;

	constructor() {

	}

	ngOnInit() {

	}

}
