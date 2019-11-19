import { Prodotto } from '../prodotto/prodotto.model';

export class Prodotti {
  prodotti: Prodotto[]

  constructor() {
    this.prodotti = []
  }

  getItem(index: number): Prodotto {
    return this.prodotti[index]
  }

  getItems(): Prodotto[] {
    return this.prodotti
  }

  add(item: Prodotto): void {
    this.prodotti.push(item)
  }
}