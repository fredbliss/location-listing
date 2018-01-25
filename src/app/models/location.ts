import { Model } from './model';
import { environment } from '../../../src/environments/environment';
import { generalSettings } from '../../../src/environments/environment';
import { Position } from "./position";
import { Direction } from "./direction";

const { domain, assetsUrl } = environment;

export class Location extends Model {

    //static readonly DEFAULT_IMAGE: string = `${domain}${assetsUrl}/${generalSettings.placeholderImage}`;

    id: number;
    billboard_id: number;
    city: string;
    count: number;
    state: string;
    county: string;
    position: Position;
    directions: Direction[];
    facing: string;
    highway: string;
    size: string;
    faces: number;
    orientation: string;
    illumination: string;
    panel: string;
    read_orientation: string;
    structure_type: string;
    traffic_count: number;
    traffic_count_year: number;
    //images: string[];
    latitude: number;
    longitude: number;
    type: string;
    //published: boolean;

	/*static newLocation(params) {
		return new Location(Object.assign({}, params, {
			version: 1
		}));
	}

	constructor(params) {
		super();
		if (params) {
			this.id = params.id;
			this.billboard_id = params.billboard_id;
			this.city = params.city;
			this.state = params.state;
			this.county = params.county;
			this.location = params.location;
			this.highway = params.highway;
			this.size = params.size;
			this.faces = params.faces;
			this.orientation = params.orientation;
			this.illumination = params.illumination;
			this.structure_type = params.structure_type;
			this.traffic_counts = params.traffic_counts;
			this.latitude = params.latitude;
			this.longitude = params.longitude;
			this.images = this.setImages(params.images);
			this.published = params.published;
		}
	}

	private setImages(images: string): string[] {
		if (images) {
			return images
				.split(',')
				.map(image => window['encodeURI'](image));
		} else {
			return [];
		}
	}*/

}
