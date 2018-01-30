import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { Location } from '../models';
import { generalSettings, environment } from "../../environments/environment";
const { apiUrl } = environment;
const { placeholderImage } = generalSettings;

@Component({
  selector: 'location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  providers: [NgSwitch]
})
export class LocationDetailComponent implements OnInit {

	apibase: string = apiUrl;
	placeholder: string = placeholderImage;

	@Input() location: Location;
	@Input() mapwidth: number = 250;
	@Input() mapheight: number = 150;

	constructor() {

	}

	ngOnInit() {

	}

}
