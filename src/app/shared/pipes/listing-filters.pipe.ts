import { Pipe, PipeTransform } from '@angular/core';

import { Location } from "../../models";

@Pipe({
  name: 'listingFilters'
})
export class ListingFiltersPipe implements PipeTransform {

  transform(items: Location[], filter: any): Location[] {

	let filterSum = 0;

	if(filter && Array.isArray(items)) {
		let filterValues = Object.values(filter);
		filterValues.forEach(function(value) {
			filterSum += (value=='undefined' || value==null ? 0 : value.length);
		});

		if(filterSum==0) {
			return items;
		}

		console.log(items.filter(item => {
		  let notMatchingField = Object.keys(filter)
			  .find(key => new RegExp(filter[key], 'i').test(item[key])===false);

		  return !notMatchingField; // true if matches all fields
		}));

	//because null values are returned instead of defined in filtering, check each filter value for
	//length and if ==0, return all items.
	/*if (filter && Array.isArray(items)) {
		let filterValues = Object.values(filter);

		filterValues.forEach(function(value) {
			filterSum += (value=='undefined' || value==null ? 0 : value.length);
		});

		if(filterSum==0) {
			return items;
		}

		let filterKeys = Object.keys(filter);

		return items.filter(item =>
			filterKeys.reduce((location, keyName) =>
				(location && new RegExp(filter[keyName], 'i').test(item[keyName])), true));
*/

	}else{
		return items;
	}

  }

}
