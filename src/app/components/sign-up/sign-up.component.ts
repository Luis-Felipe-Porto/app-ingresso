import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService';
import { SignupService } from '../../service/SignupService';


@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  formData: any = {};

  constructor(private http: HttpClient,private router: Router,private auth:AuthService,private loginService:SignupService) {}

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
    
    this.loginService.userRegister(this.formData).subscribe(data=>{
      if(data != null){
        this.auth.setToken(data.token)
        this.router.navigateByUrl('/login');
      }else{
        alert("User or Password Invailid")
      }
    },error=>{
      console.log("My Error", error)
      alert("Error ao consultar dados")
    })
  }

}
