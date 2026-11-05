import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-generator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Random Quote Generator</h2>
      <p class="quote-text">{{ quote }}</p>
    </div>
  `,
  styles: [] // <-- Replaced styleUrls with empty inline styles array
})
export class QuoteGeneratorComponent implements OnInit {
  quote: string = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getRandomQuote().subscribe(data => {
      this.quote = data;
    });
  }
}