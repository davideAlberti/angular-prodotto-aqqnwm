import { Fornitore } from '../fornitore/fornitore.component';

export class Fornitori {
  fornitori: Fornitore[]

  constructor() {
    this.fornitori = []
  }

  getItem(index: number): Fornitore {
    return this.fornitori[index]
  }

  getItems(): Fornitore[] {
    return this.fornitori
  }

  add(item: Fornitore): void {
    this.fornitori.push(item)
  }

  getLastIndex() {
    return this.fornitori.length - 1;
  }
}