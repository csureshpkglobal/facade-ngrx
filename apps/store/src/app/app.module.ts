import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartService } from './cart.service';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { MycollectionService } from './mycollection.service';
import { SnakBarComponent } from './snak-bar/snak-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BookDetailsComponent,
    BillingPageComponent,
    SnakBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BooksService, CartService, MycollectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
