import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MockApi } from './api/mock-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookService } from './service/book.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockApi),
    ModalModule.forRoot()
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
