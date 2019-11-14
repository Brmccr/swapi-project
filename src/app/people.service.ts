import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { Observable } from 'rxjs';
import { Input } from '@angular/core'


 
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  @Input() searchText: string 
  private dbUrl : string =`https://swapi.co/api/people/?search=${this.searchText}`;
  constructor(private http: HttpClient) {} 
  
  getPeople(): Observable<People[]> { 
    return this.http.get<People[]>(this.dbUrl);
  }
}
  