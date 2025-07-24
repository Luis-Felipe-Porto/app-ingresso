import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { TicketService } from '../../service/TicketService';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sale-ticket',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage,FormsModule],
  templateUrl: './sale-ticket.component.html',
  styleUrl: './sale-ticket.component.scss'
})
export class SaleTicketComponent {
  formData: any = {};

  constructor(private ticketService: TicketService,private toastr: ToastrService,private router: Router,private location: Location){}

  createTicket(){
    if (this.formData.title == null || this.formData.price ==null || this.formData.description == null) {
      this.toastr.warning('Campos inválidos na criação de Ingresso', 'Erro de Cadastro');
      return;
    } 
    this.ticketService.createTicket(this.formData).subscribe(data=>{
      if(data != null){
        this.router.navigateByUrl('/my-tickets');
        this.toastr.success('Sucesso ao criar Ingresso!', 'Ingresso Criado',{
          timeOut: 10000,
          closeButton: true, 
        });
      }else{
        this.toastr.warning('Campos inválidos na criação de Ingresso', 'Erro de Cadastro');
      }
    },error=>{
      if (error.status === 400) {
        this.toastr.warning('Campos inválidos na criação de Ingresso', 'Erro de Cadastro');
      } else {
        console.log(error);
        this.toastr.error('Não foi possível criar ingresso. Tente novamente mais tarde.', 'Erro Inesperado');
      }
    })
  }
  cancelar(){
    this.location.back();
  }
}
