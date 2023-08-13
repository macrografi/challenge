import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  private bookUrl: string = `${environment.book}`;
  private categoryUrl: string = `${environment.category}`;

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookUrl);
  }
  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryUrl);
  }
}
