import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Bookservice } from './services/bookservice';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { DetailBookComponent } from './detail-book/detail-book.component';


const  appRoutes: Routes = [
  { path: 'Menu', component: MenuComponent },
  { path: 'Books', component: BooksComponent },
  { path: 'Author', component: AuthorsComponent },
  { path: 'detailBook', component: DetailBookComponent },
  { path: 'book/view/:id', component: DetailBookComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BooksComponent,
    AuthorsComponent,
    DetailBookComponent,
    RouterModule.forRoot(appRoutes)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:
   [bookservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
