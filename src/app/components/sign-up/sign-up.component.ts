import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<LoginResponse>('http://localhost:8080/v1/signIn', this.formData).subscribe(
      response => {
        console.log('Sucesso!', response);
        sessionStorage.setItem("auth-token",response.token)
      },
      error => {
        console.error('Erro ao enviar formulário:', error);
        // Aqui você pode lidar com o erro, por exemplo, exibir uma mensagem de erro ao usuário.
      }
    )
  }

}
