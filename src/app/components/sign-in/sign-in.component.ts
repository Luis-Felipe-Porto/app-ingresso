import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://localhost:8080/v1/signUp', this.formData)
      .subscribe(
        response => {
          console.log('Sucesso!', response);
          // Aqui você pode lidar com o sucesso, por exemplo, redirecionar o usuário ou exibir uma mensagem de sucesso.
        },
        error => {
          console.error('Erro ao enviar formulário:', error);
          // Aqui você pode lidar com o erro, por exemplo, exibir uma mensagem de erro ao usuário.
        }
      );
  }
}
