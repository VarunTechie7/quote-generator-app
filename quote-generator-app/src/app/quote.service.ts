import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: string[] = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi"
  ];

  getRandomQuote(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return of(this.quotes[randomIndex]);
  }
}

