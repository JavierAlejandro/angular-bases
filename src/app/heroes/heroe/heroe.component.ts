import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 31;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'SpiderMan';
  }

  cambiarEdad(): void {
    this.edad = 99;
  }
}
