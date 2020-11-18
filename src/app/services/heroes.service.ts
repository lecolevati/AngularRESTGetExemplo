import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url = 'https://extendsclass.com/mock/rest/721f0dbc85b58ec8e0d30bdd06e01378/heroes'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.url)
      .pipe(
        retry(2)
      )
  }
}

