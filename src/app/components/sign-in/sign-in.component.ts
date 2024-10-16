import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  formData: any = {};

  constructor(private http: HttpClient,private router: Router) {}

  submitForm() {
    this.http.post<any>('http://localhost:8080/v1/signUp', this.formData)
      .subscribe(
        response => {
          this.router.navigate(['/sign-in']);
         
        },
        error => {
          console.log('Sucesso!', error);
        
        }
      );
  }
}
