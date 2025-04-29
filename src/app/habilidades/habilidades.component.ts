import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  datosB = [
          {
              text1: 'Responsive',
              text2: 'The pages are adaptables to different devices'
          }, 
          {
              text1: 'Interactive',
              text2: 'Seek the best interaction with the user'
          }
      ]
  
    tecnologias = [
        { nombre: "html", valor: 80},
        { nombre: "css", valor: 85},
        { nombre: "python", valor: 60},
        { nombre: "js", valor: 75},
        { nombre: "react", valor: 70},
        { nombre: "Angular", valor: 40},
        { nombre: "mysql", valor: 55},
        { nombre: "mongo-db", valor: 25}
    ];
}
