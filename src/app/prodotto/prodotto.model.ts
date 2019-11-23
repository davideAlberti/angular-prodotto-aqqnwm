import { Router } from '@angular/router'

export class Prodotto {
  codice: string
  nome: string
  prezzo: number
  dataScadenza: Date
  quantita: number

  constructor(codice: string, nome: string, prezzo: number, dataScadenza: Date, quantita: number) {
    this.codice = codice
    this.nome = nome
    this.prezzo = prezzo
    this.dataScadenza = dataScadenza
    this.quantita = quantita
  }

  get isScaduto(): boolean {
    return this.dataScadenza < new Date()
  }

  get getColor(): string {
    if(this.isScaduto) return 'red'
    else return 'green'
  }

  get getGiorniScadenza() {
    return Math.abs(this.diff(new Date(), this.dataScadenza))
  }

  private diff(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
  }

  get formatDate() {
    return this.dataScadenza.toISOString().substring(0, 10);
  }

  set formatDate(text: any){
    let elem = text.split('-');
    let d = new Date(Date.UTC(elem[0], elem[1]-1, elem[2]));
    this.dataScadenza.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }
}