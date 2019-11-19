import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProdottoComponent, MagazzinoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
