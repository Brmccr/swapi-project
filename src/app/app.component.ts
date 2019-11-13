import { Component } from '@angular/core';

// import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// import { Post } from './post';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swapi-project';
  people: string = "";
  responsetwo: any;
  selectedValue: any;
  // posts : any;

  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient ) {}

  ngOnInit() {
    let obs = this.http.get('https://swapi.co/api/people/1')
    obs.subscribe((response) => console.log(response));
  }
  
  search() {
    this.http.get('https://swapi.co/api/' + this.people)
    .subscribe((responsetwo) => {
      this.responsetwo = responsetwo;
      console.log(this.responsetwo)
    })
  }

  // search() {
  //   this.http.get('https://swapi.co/api/?search=${inputInfo}')
  //   .subscribe((responsetwo) => {
  //     this.responsetwo = responsetwo;
  //     console.log(this.responsetwo)
  //   })
  // }

  // search() {
  //   this.http.get('https://swapi.co/api/people/')
  //   .subscribe((responsetwo) => {
  //     this.responsetwo = responsetwo;
  //     console.log(this.responsetwo)
  //   })
  // }
  
}
