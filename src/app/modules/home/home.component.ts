import { Component, OnInit } from '@angular/core';
import { RandomQuoteService } from '../../shared/services/random-quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomQuote: any = {};
  constructor(private randomQuoteService : RandomQuoteService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    this.randomQuoteService.getRandomQuote().subscribe(
      (data) => { 
        this.randomQuote = data; console.log(this.randomQuote); 
    });
  }
}
