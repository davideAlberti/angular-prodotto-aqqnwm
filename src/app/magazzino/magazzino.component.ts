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

  constructor() { }

  ngOnInit() {
    this.prodotti = new Prodotti()
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-20'), 24))
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-20'), 24))
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-20'), 24))
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-20'), 24))
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-20'), 24))
  }
}