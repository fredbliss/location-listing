import { Component, OnInit } from '@angular/core';
import { LocationService } from "../shared/services/location.service";
import { PagerService } from "../shared/services/pager-service.service";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Location } from "../models";
import * as kf from '../shared/animations/keyframes';

@Component({
  selector: 'location-listing',
  templateUrl: './location-listing.component.html',
  styleUrls: ['./location-listing.component.css'],
  providers: [ LocationService, PagerService ],
	animations: [
		trigger('slideInOut', [
			state('in', style({
				transform: 'translate3d(0, 0, 0)'
			})),
			state('out', style({
				transform: 'translate3d(100%, 0, 0)'
			})),
			transition('in => out', animate('200ms ease-in-out')),
			transition('out => in', animate('200ms ease-in-out'))
		]),
		trigger( 'swipeAnimator', [
			transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight)))
		])
	]
})
export class LocationListingComponent implements OnInit {

	// array of all items to be paged
	private allLocations: Location[];

	// pager object
	pager: any = {};
	page: number = 1;
	selectedlocation: Location;
	sliderState:string = 'out';
	animationState: string;
	// paged items
	pagedLocations: Location[];

	itemsPerPage: number = 12;
	totalLocations: number;

	constructor(private _locationService: LocationService, private _pagerService: PagerService) {

	}

	ngOnInit() {
		this._locationService.getLocations().subscribe(
			data => {
				this.allLocations = data;
				this.totalLocations = data.length;
				this.setPage(1);
			}
		);
	}

	setPage(page: number) {
		if (page < 1 || page > this.pager.totalPages) {
			return;
		}

		// get pager object from service
		this.pager = this._pagerService.getPager(this.totalLocations, page, this.itemsPerPage);

		// get current page of items
		this.pagedLocations = this.allLocations.slice(this.pager.startIndex,this.pager.endIndex+1);
	}

	toggleMenu() {
		this.sliderState = this.sliderState === 'out' ? 'in' : 'out';
	}

	loadInfoPanel(location: Location) {
		if(this.sliderState === 'in') {
			this.toggleMenu();  //shut it down THEN
		}

		this.selectedlocation = location;
		this.toggleMenu();
		//this.resetAnimationState();
	}

	startAnimation(state) {
		if (!this.animationState) {
			this.animationState = state;
			this.sliderState = 'in';
		}
	}

	resetAnimationState() {
		this.animationState = '';
	}

}
