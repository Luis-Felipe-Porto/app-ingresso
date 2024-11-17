import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService';
import { SignupService } from '../../service/SignupService';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BackPageComponent } from "../back-page/back-page.component";


@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage, FormsModule, CommonModule, BackPageComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  formData: any = {};

  constructor(private http: HttpClient,private router: Router,private auth:AuthService,private loginService:SignupService,private toastr: ToastrService) {}

  submitForm() {
    if (!this.isValidForm()) {
      this.toastr.warning('Validação de campos inválidos', 'Verifique os campos.');
      return;
    }
    if (this.formData.login.length <= 3) {
      this.toastr.warning('Login deve ter mais de 3 caracteres', 'Erro de Login');
      return;
    }

    if (this.formData.password.length <= 6) {
      this.toastr.warning('Senha deve ter mais de 6 caracteres', 'Erro de Senha');
      return;
    }
    this.loginService.authLogin(this.formData).subscribe(data=>{
      if(data != null){
        this.auth.setToken(data.token)
        this.router.navigateByUrl('/tickets');
      }else{
        this.toastr.warning('Usuário ou senha inválidos', 'Erro de Login');
      }
    },error=>{
      if (error.status === 403) {
        this.toastr.warning('Usuário ou senha inválidos', 'Erro de Login');
      }else{
        console.log(error);
        this.toastr.error('Não foi possível criar conta. Tente novamente mais tarde.', 'Erro Inesperado');
      }
    })
  }
  isValidForm(): boolean {
    const isLoginValid = this.formData.login && this.formData.login.length > 3;
    const isPasswordValid = this.formData.password && this.formData.password.length > 6;
    return isLoginValid && isPasswordValid;
  }
}
