import { Component, OnInit, Input } from '@angular/core';
import { Fornitore } from './fornitore.model';

@Component({
  selector: 'app-fornitore',
  templateUrl: './fornitore.component.html',
  styleUrls: ['./fornitore.component.css']
})
export class FornitoreComponent implements OnInit {

  @Input() fornitore: Fornitore

  constructor() { }

  ngOnInit() {
  }

}