import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProdottoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
