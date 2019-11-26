const MINSTOCK: number = 10;

export class Prodotto {
  codice: string;
  nome: string;
  prezzo: number;
  dataScadenza: Date;
  quantita: number;

  constructor(codice: string, nome: string, prezzo: number, dataScadenza: Date, quantita: number) {
    this.codice = codice;
    this.nome = nome;
    this.prezzo = prezzo;
    this.dataScadenza = dataScadenza;
    this.quantita = quantita;
  }

  get DataScadenza() {
    return this.dataScadenza.toISOString().substring(0, 10);
  }

  set DataScadenza(data) {
    this.dataScadenza = new Date(data);   
  }

  isScadutoOInScadenza(): boolean {
    return this.giorniAScadenza() < 7;
  }

  getScadenzaColor(): string {
    if (this.giorniAScadenza() <= 0) {
      return 'red';
    }
    if (this.giorniAScadenza() < 7) {
      return 'orange';
    }
    return 'green';
  }

  getScadenzaLabel(): string {
    if (this.giorniAScadenza() < 0) {
      return 'Scaduto';
    }
    if (this.giorniAScadenza() == 0) {
      return 'Scade oggi';
    }
    if (this.giorniAScadenza() < 7) {
      return 'Scade fra ' + this.giorniAScadenza() + ' giorni.';
    }
    return this.dataScadenza.toLocaleDateString();
  }

  getScadenzaShortLabel(): string {
    if (this.giorniAScadenza() < 0) {
      return 'S';
    }
    if (this.giorniAScadenza() == 0) {
      return 'O';
    }
    if (this.giorniAScadenza() < 7) {
      return this.giorniAScadenza().toString();
    }
    return 'V';
  }

  giorniAScadenza(): number {
    let diffInTime = this.dataScadenza.getTime() - new Date().getTime();
    return Math.round(diffInTime / (1000 * 3600 * 24));
  }

  daAcquistare(): boolean {
    return this.quantita < MINSTOCK && this.nome != '';
  }
}
