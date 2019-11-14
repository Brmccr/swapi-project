import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { PeopleService } from "./people.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleDisplayComponent } from './people-display/people-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPeopleComponent,
    PeopleDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule, 
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [PeopleService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
