export class Fornitore {
  nome: string
  sede: string
  sitoWeb: string
  mail: string
  telefono: string
  partitaIVA: string
  prodotto: string

  constructor(nome: string, sede: string, sitoWeb: string, mail: string, telefono: string, partitaIVA: string, prodotto: string) {
    this.nome = nome
    this.sede = sede
    this.sitoWeb = sitoWeb
    this.mail = mail
    this.telefono = telefono
    this.partitaIVA = partitaIVA
    this.prodotto = prodotto
  }
}