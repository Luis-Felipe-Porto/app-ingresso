import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { LoginResponse } from '../../types/login-response.type';
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService';
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

  constructor(private http: HttpClient,private router: Router,private auth:AuthService) {}

  submitForm() {
    this.http.post<LoginResponse>('http://localhost:8080/v1/signIn', this.formData).subscribe(
      response => {
        this.auth.setToken(response.token)
        this.router.navigate(['/tickets']);
      },
      error => {
        console.error('Erro ao enviar formulário:', error);
      }
    )
  }

}
