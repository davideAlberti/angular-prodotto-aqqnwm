import { Component, OnInit } from '@angular/core';
import { Prodotti } from './prodotti.model';
import { Prodotto } from '../prodotto/prodotto.model';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {

  prodotti: Prodotti
  corrente: number = 0;

  constructor() { }

  ngOnInit() {
    this.prodotti = new Prodotti()
    this.prodotti.add(new Prodotto('P1', 'Prodotto A', 2.56, new Date('2019-09-19'), 24))
    this.prodotti.add(new Prodotto('P2', 'Prodotto B', 2.56, new Date('2019-10-03'), 24))
    this.prodotti.add(new Prodotto('P3', 'Prodotto C', 2.56, new Date('2019-10-18'), 24))
    this.prodotti.add(new Prodotto('P4', 'Prodotto D', 2.56, new Date('2019-12-25'), 24))
    this.prodotti.add(new Prodotto('P5', 'Prodotto E', 2.56, new Date('2019-11-20'), 24))
    this.prodotti.add(new Prodotto('P6', 'Prodotto F', 2.56, new Date('2019-10-20'), 24))
    this.prodotti.add(new Prodotto('P7', 'Prodotto G', 2.56, new Date('2019-10-11'), 24))
    this.prodotti.add(new Prodotto('P8', 'Prodotto H', 2.56, new Date('2019-12-18'), 24))
    this.prodotti.add(new Prodotto('P9', 'Prodotto I', 2.56, new Date('2019-11-20'), 24))
  }

  addNuovoProdotto() {
    this.prodotti.add(new Prodotto('nuovo', '', 0.00, new Date(), 0))
    this.corrente = this.prodotti.getLastIndex
  }
}