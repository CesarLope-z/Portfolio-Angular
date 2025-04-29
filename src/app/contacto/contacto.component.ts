import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  methodsService = inject(MethodsService)

  aplicarForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })

  submitApplication(){
    this.methodsService.submitApplication(
      this.aplicarForm.value.name ?? '',
      this.aplicarForm.value.email ?? '',
      this.aplicarForm.value.message ?? '',
    )
  }

}
