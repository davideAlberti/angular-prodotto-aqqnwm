import { Component, OnInit } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto: Prodotto

  constructor() { }

  ngOnInit() {
  }
}