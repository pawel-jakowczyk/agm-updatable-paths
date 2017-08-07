import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AgmPolygon } from '../../directives/polygon';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
export declare class PolygonManager {
    private _mapsWrapper;
    private _zone;
    private _polygons;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addPolygon(path: AgmPolygon): void;
    updatePolygon(polygon: AgmPolygon): Promise<void>;
    setPolygonOptions(path: AgmPolygon, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolygon(paths: AgmPolygon): Promise<void>;
    createEventObservable<T>(eventName: string, path: AgmPolygon): Observable<T>;
    createDragEventObservable<T>(eventName: string, path: AgmPolygon): Observable<T>;
    private createObservableForPolygon<T>(eventName, path, callback);
    private buildPath(cordinates, paths);
    private setCoordinates(path, coordinate);
}
