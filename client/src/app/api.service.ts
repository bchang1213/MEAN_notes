import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


@Injectable()
export class ApiService {

	constructor(private _http: Http) { }

	saveToDB(noteObject){
		var noteSave = this._http.post("/notes/new", noteObject);
		return noteSave.map(Response=>Response.json()).toPromise();
	}

	getNotes(){
		var allNotes = this._http.get("/notes");
		return allNotes.map(Response=>Response.json()).toPromise();
	}

}
