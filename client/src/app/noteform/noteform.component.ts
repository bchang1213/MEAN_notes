import { Component, OnInit } from '@angular/core';
import { Note } from './../note';
import { ApiService } from './../api.service';


@Component({
	selector: 'app-noteform',
	templateUrl: './noteform.component.html',
	styleUrls: ['./noteform.component.css']
})
export class NoteformComponent implements OnInit {
	note:Note;
	notes:any[];

	constructor(private _apiService:ApiService) {
	
	}

	ngOnInit() {
		this.note = new Note();
		this.populateNotes();
	}

	onSubmit(){
		console.log("Form submitted:", this.note);
		this._apiService.saveToDB(this.note)
		.then((data)=>{
			console.log('successfully saved. then:', data);
			this.populateNotes();
		})
		.catch((error)=>{
			console.log('catch:', error);
		})
	}

	populateNotes(){
		this._apiService.getNotes()
		.then((data)=>{
			console.log("retrieved an array of notes.");
			this.notes = data;
		})
		.catch((error)=>{
			console.log("caught these errors: ", error);
		})
	}
}
