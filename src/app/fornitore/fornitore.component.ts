import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Fornitore } from './fornitore.model';

@Component({
  selector: 'app-fornitore',
  templateUrl: './fornitore.component.html',
  styleUrls: ['./fornitore.component.css']
})
export class FornitoreComponent implements OnInit {

  @Input() fornitore: Fornitore

  @ViewChild("nomeInput", { static: true }) nomeInput: ElementRef
  @ViewChild("sedeInput", { static: true }) sedeInput: ElementRef
  @ViewChild("sitowebInput", { static: true }) sitoInput: ElementRef
  @ViewChild("emailInput", { static: true }) emailInput: ElementRef
  @ViewChild("telefonoInput", { static: true }) telefonoInput: ElementRef
  @ViewChild("ivaInput", { static: true }) ivaInput: ElementRef

  fornitoreCambiato: boolean = false
  nomeError: boolean = false
  sedeError: boolean = false
  sitoError: boolean = false
  emailError: boolean = false
  telefonoError: boolean = false
  ivaError: boolean = false

  constructor() { }

  ngOnInit() {
    
  }

  save() {
    if(this.nomeInput.nativeElement.value == '') this.nomeError = true
    else {
      this.fornitore.nome = this.nomeInput.nativeElement.value
      this.nomeError = false
    }

    if(this.sedeInput.nativeElement.value == '') this.sedeError = true
    else {
      this.fornitore.sede = this.sedeInput.nativeElement.value
      this.sedeError = false
    }

    if(!this.isUrl(this.sitoInput.nativeElement.value) || this.sitoInput.nativeElement.value == '') this.sitoError = true
    else {
      this.fornitore.sitoWeb = this.sitoInput.nativeElement.value
      this.sitoError = false
    }

    if(!this.isEmail(this.emailInput.nativeElement.value) || this.emailInput.nativeElement.value == '') this.emailError = true
    else {
      this.fornitore.mail = this.emailInput.nativeElement.value
      this.emailError = false
    }

    if(!this.isPhoneNumber(this.telefonoInput.nativeElement.value) || this.telefonoInput.nativeElement.value == '') this.telefonoError = true
    else {
      this.fornitore.telefono = this.telefonoInput.nativeElement.value
      this.telefonoError = false
    }

    if(this.ivaInput.nativeElement.value == '' || this.ivaInput.nativeElement.value.length != 11) this.ivaError = true
    else {
      this.fornitore.partitaIVA = this.ivaInput.nativeElement.value
      this.ivaError = false
    }

    this.fornitoreCambiato = false
    this.databaseService.saveFornitore(this.fornitore)
    console.log(this.databaseService.getFornitori())
  }

  reset() {
    this.nomeInput.nativeElement.value = this.fornitore.nome
    this.sedeInput.nativeElement.value = this.fornitore.sede
    this.sitoInput.nativeElement.value = this.fornitore.sitoWeb
    this.emailInput.nativeElement.value = this.fornitore.mail
    this.telefonoInput.nativeElement.value = this.fornitore.telefono
    this.ivaInput.nativeElement.value = this.fornitore.partitaIVA
  }

  private isUrl(url) {
   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   return regexp.test(url);
  }

  private isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private isPhoneNumber(number) {
    return !isNaN(number)
  }

  send() {
    return 'mailto:' + this.fornitore.mail
  }
}