import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import People from './models/people.models';
import Films from './models/films.model';
import Ships from './models/ships.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private dbUrlPeople = `https://swapi.co/api/people/${}`;
  private dbUrlFilms = `https://swapi.co/api/films/${}`;
  private dbUrlShips = `https://swapi.co/api/starships/${}`;

  constructor(private http: HttpClient) { }

  getPeople() : Observable<People[]> {
    return this.http.get<People[]>(this.dbUrlPeople)
  };
  
  getFilms() : Observable<Films[]> {
    return this.http.get<Films[]>(this.dbUrlFilms)
  };

  getShips() : Observable<Ships[]> {
    return this.http.get<Ships[]>(this.dbUrlShips)
  };

}
