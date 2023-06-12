import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  createAccount() {
    // Lógica para enviar los datos al servidor y crear una cuenta
  }
}
