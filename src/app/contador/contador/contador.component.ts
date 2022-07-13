import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ title }}</h1>
    <h3>
      La base es:
      <strong>
        {{ base }}
      </strong>
    </h3>
    <button (click)="operacionRestSum(-base)">- {{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="operacionRestSum(base)">+ {{ base }}</button>`,
})
export class ContadorComponent {
  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;

  // sumar() {
  //   this.number += 1;
  // }

  // resta() {
  //   this.number -= 1;
  // }

  operacionRestSum(valor: number) {
    this.number += valor;
  }
}
