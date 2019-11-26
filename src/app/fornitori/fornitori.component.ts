import { Component, OnInit } from '@angular/core';
import { Fornitori } from './fornitori.model';
import { Fornitore } from '../fornitore/fornitore.model';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent implements OnInit {

  fornitori: Fornitori
  corrente: number

  constructor() { }

  ngOnInit() {
    this.fornitori = new Fornitori()
    this.corrente = -1
  }

  setCorrente(indice: number) {
    this.corrente = indice;
  }

  addNuovoFornitore() {
    this.fornitori.add(new Fornitore('', '', '', '', '', ''));
    this.corrente = this.fornitori.getLastIndex();
  }

}