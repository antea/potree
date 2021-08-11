/**
 * @author Connor Manning
 */

import {PointCloudEptGeometry, PointCloudEptGeometryNode} from "../PointCloudEptGeometry";

export class EptLoader {
	static async load(file, callback) {

		let response = await fetch(file);
		let json = await response.json();

		let url = file.substr(0, file.lastIndexOf('ept.json'));
		let geometry = new PointCloudEptGeometry(url, json);
		let root = new PointCloudEptGeometryNode(geometry);

		geometry.root = root;
		geometry.root.load();

		callback(geometry);
	}
};

