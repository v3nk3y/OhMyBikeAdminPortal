import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RandomQuoteService {
  private apiKey = environment.rapidAPI.apiKey;
  private baseUrl = environment.rapidAPI.apiUrl;

  constructor(private http: HttpClient) {}

  // To get a random quote from the API using - RapidAPI
  getRandomQuote(): Observable<any> {
    // Headers object to be sent with the request to the API
    const headers = {
      'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
      'x-rapidapi-key': this.apiKey
    };
    return this.http.get(`${this.baseUrl}/quote`, { headers });
  }
}
