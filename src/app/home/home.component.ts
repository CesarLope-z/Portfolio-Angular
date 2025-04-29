import { Component } from '@angular/core';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FooterComponent } from '../footer/footer.component';
import { ShowProjects } from '../showprojects';

@Component({
  selector: 'app-home',
  imports: [HabilidadesComponent, ProjectsComponent, ContactoComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    tituloTrabajo = 'Web Developer'

    datos = [
        {
            text1: '¿?',
            text2: 'Experience'
        },
        {
            text1: '+20',
            text2: 'Pages'
        },
        {
            text1: '+80 Hours',
            text2: 'Learning'
        }
    ]
    
    showProjectsList: ShowProjects[] = [
        {
            id: 1,
            img: "maternity",
            nombre: "Maternity Web",
            descripcion: "Inform and help the baby and his mother giving the necessary information about laws and protection.",
            href: ""
        },
        {
            id: 2,
            img: "miRecibo",
            nombre: "My receipt",
            descripcion: "The convenience of searching and create a list of materials that you need, to show your receipt with information and prices.",
            href: ""
        },
        {
            id: 3,
            img: "misTareas",
            nombre: "To do list",
            descripcion: "The easiest way to list and schedule tasks about, Work, University, College.",
            href: ""
        },
        {
            id: 4,
            img: "apv",
            nombre: "Pacientes de veterinarios",
            descripcion: "Do you need to save your patients?, This page allows you to create your account to organize your dog patients",
            href: ""
        },
        {
            id: 5,
            img: "blogCafe",
            nombre: "Sale and Coffee Courses",
            descripcion: "Design and structure of a web page on coffee trade.",
            href: ""
        },
        {
            id: 6,
            img: "proyecto61",
            nombre: "Our Website",
            descripcion: "Talk to me and let's do a project together.",
            href: ""
        }
    ];
}
