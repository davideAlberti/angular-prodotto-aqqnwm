import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto: Prodotto
  @ViewChild('codiceInput', {static: true}) codiceInput: ElementRef
  @ViewChild('nomeInput', {static: true}) nomeInput: ElementRef
  @ViewChild('prezzoInput', {static: true}) prezzoInput: ElementRef
  @ViewChild('dataScadenzaInput', {static: true}) dataScadenzaInput: ElementRef
  @ViewChild('quantitaInput', {static: true}) quantitaInput: ElementRef

  constructor() { }

  ngOnInit() {
  }

  save(evento: MouseEvent) {
    var elementoHTML: HTMLInputElement = this.codiceInput.nativeElement

    console.log(elementoHTML.value)
  }
}