import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Prodotto } from "./prodotto.model";

@Component({
  selector: "app-prodotto",
  templateUrl: "./prodotto.component.html",
  styleUrls: ["./prodotto.component.css"]
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto: Prodotto

  @ViewChild("codiceInput", { static: true }) codiceInput: ElementRef
  @ViewChild("nomeInput", { static: true }) nomeInput: ElementRef
  @ViewChild("prezzoInput", { static: true }) prezzoInput: ElementRef
  @ViewChild("dataScadenzaInput", { static: true }) dataScadenzaInput: ElementRef
  @ViewChild("quantitaInput", { static: true }) quantitaInput: ElementRef

  prodottoCombiato: boolean = false
  codiceError: boolean = false
  nomeError: boolean = false
  prezzoError: boolean = false
  dataScadenzaError: boolean = false
  quantitaError: boolean = false;

  constructor() {}

  ngOnInit() {}

  save() {
    if(this.codiceInput.nativeElement.value == '') this.codiceError = true
    else {
      this.prodotto.codice = this.codiceInput.nativeElement.value
      this.codiceError = false
    }
    
    if(this.nomeInput.nativeElement.value == '') this.nomeError = true
    else {
      this.prodotto.nome = this.nomeInput.nativeElement.value
      this.nomeError = false
    }

    if(this.prezzoInput.nativeElement.value == 0) this.prezzoError = true
    else {
      this.prodotto.prezzo = this.prezzoInput.nativeElement.value
      this.prezzoError = false
    }

    if(this.dataScadenzaInput.nativeElement.value == '') this.dataScadenzaError = true
    else {
      this.prodotto.dataScadenza = new Date(this.dataScadenzaInput.nativeElement.value)
      this.dataScadenzaError = false
    }

    if(this.quantitaInput.nativeElement.value == '') this.quantitaError = true
    else {
      this.prodotto.quantita = this.quantitaInput.nativeElement.value
      this.quantitaError = false
    }

    this.prodottoCombiato = false;
  }

  reset() {
    this.codiceInput.nativeElement.value = this.prodotto.codice
    this.nomeInput.nativeElement.value = this.prodotto.nome
    this.prezzoInput.nativeElement.value = this.prodotto.prezzo
    this.dataScadenzaInput.nativeElement.value = this.prodotto.dataScadenza
    this.quantitaInput.nativeElement.value = this.prodotto.quantita
  }
}
