import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService';
import { SignupService } from '../../service/SignupService';
import { ToastrService } from 'ngx-toastr';
import { BackPageComponent } from "../back-page/back-page.component";


@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage, FormsModule, BackPageComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  formData: any = {};

  constructor(private http: HttpClient,private router: Router,private auth:AuthService,private loginService:SignupService,private toastr: ToastrService) {}

  submitForm() {
    this.loginService.userRegister(this.formData).subscribe(data=>{
      if(data != null){
        this.auth.setToken(data.token)
        this.router.navigateByUrl('/sign-in');
        this.toastr.success('Realize o login para começar as vendas!', 'Conta Criada',{
          timeOut: 10000,
          closeButton: true, 
        });
      }else{
        this.toastr.warning('Campos inválidos na criação de Conta', 'Erro de Cadastro');
      }
    },error=>{
      if (error.status === 400) {
        this.toastr.warning('Campos inválidos na criação de Conta', 'Erro de Cadastro');
      } else {
        console.log(error);
        this.toastr.error('Não foi possível criar conta. Tente novamente mais tarde.', 'Erro Inesperado');
      }
    })
  }


}
