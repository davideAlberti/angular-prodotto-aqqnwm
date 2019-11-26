import { Component, OnInit } from "@angular/core";
import { Prodotti } from "./prodotti.model";
import { Prodotto } from "../prodotto/prodotto.model";

@Component({
  selector: "app-magazzino",
  templateUrl: "./magazzino.component.html",
  styleUrls: ["./magazzino.component.css"]
})
export class MagazzinoComponent implements OnInit {
  
  prodotti: Prodotti;
  corrente: number;

  constructor() {}

  ngOnInit() {
    this.prodotti = new Prodotti();
    this.corrente = -1;
  }

  setCorrente(indice: number) {
    this.corrente = indice;
  }

  addNuovoProdotto() {
    this.prodotti.add(new Prodotto("", "", 0.0, new Date(), 0));
    this.corrente = this.prodotti.getLastIndex();
  }
}
