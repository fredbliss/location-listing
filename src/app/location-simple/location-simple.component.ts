import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Location } from "../models";

import { environment } from "../../environments/environment";

const { apiUrl } = environment;

@Component({
  selector: 'location-simple',
  templateUrl: './location-simple.component.html',
  styleUrls: ['./location-simple.component.css']
})
export class LocationSimpleComponent implements OnInit {

  apibase: string = apiUrl;

  @Input() location: Location;

  constructor() { }

  ngOnInit() {
  }

}
