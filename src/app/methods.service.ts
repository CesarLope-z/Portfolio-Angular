import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  submitApplication(name: string, email: string, message: string ){
    console.log(`
      El formulario escribió ${name}, ${email}, ${message}
      `)
  }

  constructor() { }
}
