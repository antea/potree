import {EptLoader} from "./loader/EptLoader";
import {PointCloudOctree} from "./PointCloudOctree";
import {POCLoader} from "./loader/POCLoader";
import {OctreeLoader} from "./modules/loader/2.0/OctreeLoader";

export var Loaders = {
    loadPointCloud: function (path, name, callback) {
        let loaded = function (e) {
            e.pointcloud.name = name;
            callback(e);
        };

        let promise = new Promise(resolve => {

            // load pointcloud
            if (!path) {
                // TODO: callback? comment? Hello? Bueller? Anyone?
            } else if (path.indexOf('ept.json') > 0) {
                EptLoader.load(path, function (geometry) {
                    if (!geometry) {
                        console.error(new Error(`failed to load point cloud from URL: ${path}`));
                    } else {
                        let pointcloud = new PointCloudOctree(geometry);
                        //loaded(pointcloud);
                        resolve({type: 'pointcloud_loaded', pointcloud: pointcloud});
                    }
                });
            } else if (path.indexOf('cloud.js') > 0) {
                POCLoader.load(path, function (geometry) {
                    if (!geometry) {
                        //callback({type: 'loading_failed'});
                        console.error(new Error(`failed to load point cloud from URL: ${path}`));
                    } else {
                        let pointcloud = new PointCloudOctree(geometry);
                        // loaded(pointcloud);
                        resolve({type: 'pointcloud_loaded', pointcloud: pointcloud});
                    }
                });
            } else if (path.indexOf('metadata.json') > 0) {
                OctreeLoader.load(path).then(e => {
                    let geometry = e.geometry;

                    if (!geometry) {
                        console.error(new Error(`failed to load point cloud from URL: ${path}`));
                    } else {
                        let pointcloud = new PointCloudOctree(geometry);

                        let aPosition = pointcloud.getAttribute("position");

                        let material = pointcloud.material;
                        material.elevationRange = [
                            aPosition.range[0][2],
                            aPosition.range[1][2],
                        ];

                        // loaded(pointcloud);
                        resolve({type: 'pointcloud_loaded', pointcloud: pointcloud});
                    }
                });

                OctreeLoader.load(path, function (geometry) {
                    if (!geometry) {
                        //callback({type: 'loading_failed'});
                        console.error(new Error(`failed to load point cloud from URL: ${path}`));
                    } else {
                        let pointcloud = new PointCloudOctree(geometry);
                        // loaded(pointcloud);
                        resolve({type: 'pointcloud_loaded', pointcloud: pointcloud});
                    }
                });
            } else if (path.indexOf('.vpc') > 0) {
                PointCloudArena4DGeometry.load(path, function (geometry) {
                    if (!geometry) {
                        //callback({type: 'loading_failed'});
                        console.error(new Error(`failed to load point cloud from URL: ${path}`));
                    } else {
                        let pointcloud = new PointCloudArena4D(geometry);
                        // loaded(pointcloud);
                        resolve({type: 'pointcloud_loaded', pointcloud: pointcloud});
                    }
                });
            } else {
                //callback({'type': 'loading_failed'});
                console.error(new Error(`failed to load point cloud from URL: ${path}`));
            }
        });

        if (callback) {
            promise.then(pointcloud => {
                loaded(pointcloud);
            });
        } else {
            return promise;
        }
    },
}