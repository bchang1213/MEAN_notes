import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteformComponent } from './noteform/noteform.component';

@NgModule({
	declarations: [
		AppComponent,
		NoteformComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
