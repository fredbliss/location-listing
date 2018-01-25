import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Location } from '../../models';

import { environment } from '../../../../src/environments/environment';

const { domain, apiUrl, assetsUrl } = environment;

@Injectable()
export class LocationService {

	private headers = new HttpHeaders({'Content-Type': 'application/json'});

	constructor(    private http: HttpClient  )  {}

	getLocations(): Observable<Location[]>{
		return this.http.get<Location[]>(`${apiUrl}/locations/`, {headers: this.headers});
	}

	getLocation(location_id): Observable<Location>{
		return this.http.get<Location>( `${apiUrl}/locations`+location_id, {headers: this.headers});
	}
}
