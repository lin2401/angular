import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/book.service';
import { Student } from '../../model/book.interface';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  books: Book[] = [];
  editEtat: boolean = false;

  constructor(private bookservice: Bookservice) { }

  ngOnInit() {


});
  }

}
/* changeEditEtat(e) {
    this.editEtat = !this.editEtat;
  } */ /*
  je voulais definir la methode qui me permet de changer l'etat de mon livre : dispo ou  pris*/
