import { Component, OnInit, Input } from '@angular/core';
import { bookservice } from '../services/book.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

@Input ('data') book = {
id: 0,
title: '',
author: '',
publicationDate: '',
nbPret: '',




}
  constructor(private bookService: bookservice) { }

  ngOnInit() {
  }

}
