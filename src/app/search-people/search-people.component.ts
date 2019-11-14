import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {
  searchPeople: FormGroup;
  people = []
 
  constructor(private fb: FormBuilder, private _peopleService: PeopleService) {

  }

  ngOnInit() {
    this._peopleService.getPeople() 
      .subscribe(data => this.people = data);
     

    
    
  } 
 
  
}
 


