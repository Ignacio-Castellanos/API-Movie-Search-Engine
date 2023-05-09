import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
// key 4afbd162

API_URL: string = 'http://www.omdbapi.com/?i=tt38 96198&apikey=4afbd162';

constructor(private http: HttpClient) { }

  getMovies (searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&S=${searchTerm}`);
  }
}
