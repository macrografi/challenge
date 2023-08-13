import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { BookService } from './service/book.service';
import { Book } from './model/book';
import { filter, map } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from './model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  bookLists$: Book[] = [];
  categoryLists$: Category[] = [];
  modalRef?: BsModalRef;
  modalItem!: any;
  isLoading!: boolean;
  constructor(
    private bookService: BookService,
    private modalService: BsModalService
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getInitialData();
    this.getCategoryList();
  }

  getInitialData(): void {
    this.bookService.getBookList().subscribe({
      next: r => {
        this.isLoading = false;
        this.bookLists$ = r;
      },
      error: err => {
        console.log('error :', err);
      },
      complete: () => {
        this.isLoading = true;
      }
    });
  }

  getCategoryList(): void {
    this.bookService.getCategoryList().subscribe({
      next: r => {
        this.categoryLists$ = r;
      },
      error: err => {
        console.log('error :', err);
      }
    });
  }

  onSelected($event: any): void {
    if ($event.target.value !== '') {
      this.getSelectedList($event.target.value);
    }
  }

  getSelectedList(selectedCategoryId: number): void {
    console.log(selectedCategoryId);
    this.bookService
      .getBookList()
      .pipe(
        map(result => result.filter(r => r.categoryId == selectedCategoryId))
      )
      .subscribe(r => {
        this.bookLists$ = r;
      });
  }

  openModal(template: TemplateRef<any>, item: any): void {
    console.log(item);
    this.modalItem = item;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
