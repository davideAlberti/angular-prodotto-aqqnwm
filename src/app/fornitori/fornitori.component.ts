import { Component, OnInit } from '@angular/core';
import { Fornitore } from '../fornitore/fornitore.model';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent implements OnInit {

  fornitori: Fornitore[]

  constructor() { }

  ngOnInit() {
  }

}