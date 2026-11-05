import { Component } from '@angular/core';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuoteGeneratorComponent], // <-- Removed RouterOutlet
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'quote-generator-app';
}