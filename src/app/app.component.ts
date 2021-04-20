import { Component } from '@angular/core';
import { $ } from 'protractor';
import { AlertadorService } from './alertador.service';
import { MensajeroService } from './mensajero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mi primera app con Angular';
  textoInput: string;
  textoBotonPulsado: string;
  botonPulsado: boolean = false;
  tarea: string;
  listaTareas: string[] = [];

  constructor (private mensajero: AlertadorService){};

  mostrarTexto() {
    if(this.textoBotonPulsado == null || this.textoBotonPulsado.length == 0) {
      this.textoBotonPulsado = `El botón ha sido pulsado con el valor ${this.textoInput}`;
    } else {
      this.textoBotonPulsado = null;
    }
    this.botonPulsado = !this.botonPulsado;
  }

  addTarea() {
    this.listaTareas.push(this.tarea);
    this.mensajero.mensaje(this.tarea);
  }
}
