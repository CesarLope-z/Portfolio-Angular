import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ShowProjects } from './showprojects';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // showProjects: ShowProjects = {
  //     img: "maternity",
  //     nombre: "Maternity Web",
  //     descripcion: "Inform and help the baby and his mother giving the necessary information about laws and protection.",
  //     href: ""
  //   }
  
}
