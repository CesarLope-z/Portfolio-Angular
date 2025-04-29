import { Component, Input } from '@angular/core';
import { ShowProjects } from '../showprojects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  template:  `
    
    <div class="carta">
      <div>
        <h5 class="titulo5">{{showProjects.nombre}}</h5>
        <p class="card-text">{{showProjects.descripcion}}</p>
        <a class="a text-end" href="more/{{showProjects.id}}" >Read more...</a>
      </div>
      <img src="index/{{showProjects.img}}.png" class="img" alt="{{showProjects.nombre}}">
    </div>
  `,
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() showProjects!: ShowProjects;
}
