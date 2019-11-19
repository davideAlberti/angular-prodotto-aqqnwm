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

  get getData(): string {
    return this.dataScadenza.getFullYear() + '-' + (this.dataScadenza.getMonth() + 1) + '-' + this.dataScadenza.getDate()
  }

  get isScaduto(): boolean {
    return this.dataScadenza < new Date()
  }

  get getColor(): string {
    if(this.isScaduto) return 'red'
    else return 'blue'
  }
}