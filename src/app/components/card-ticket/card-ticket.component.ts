import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TicketService } from '../../service/TicketService';
import { ToastrService } from 'ngx-toastr';

interface Ticket {
  id: number;
  ticket: {
    title: string;
    price: number;
    subtitle: string; // Corrigi o tipo
    description: string;
  };
  available: Boolean;
  sold: Boolean;
}

@Component({
  selector: 'card-ticket',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './card-ticket.component.html',
  styleUrl: './card-ticket.component.scss'
})
export class CardTicketComponent {

  constructor(private router: Router,private service: TicketService,private toastr: ToastrService){}

  @Input() data: Ticket | null = null;
  @Input() showButtonAvailable = false;
  @Input() showButtonMyTickets = false;

  publicar(id:number | undefined){
    if(id == undefined){
      return;
    }
    this.service.publishTicket(id).subscribe(data=>{
      if(data != null){
        this.router.navigateByUrl('/tickets');
        this.toastr.success('Boas vendas!', 'Ingresso Publicado',{
          timeOut: 10000,
          closeButton: true, 
        });
      }else{
        this.toastr.warning('Não foi possivel Publicar', 'Erro ao Publicar');
      }
    },error=>{
      console.log(error);
      this.toastr.error('Não foi possível criar conta. Tente novamente mais tarde.', 'Erro Inesperado');
    })
  }
  comprar(ticketId:number | undefined){
    if(ticketId == undefined){
      return;
    }
    this.router.navigateByUrl(`/payment/${ticketId}`);
  }
  editar(){
    this.router.navigateByUrl('/sale');
  }
  desativar(ticketId:number | undefined){
    if(ticketId == undefined){
      return;
    }
    this.service.disableTicket(ticketId).subscribe(data=>{
      if(data != null){
        this.router.navigateByUrl('/my-tickets');
        this.toastr.warning('Boas vendas!', 'Ingresso Removido',{
          timeOut: 10000,
          closeButton: true, 
        });
      }else{
        this.toastr.warning('Não foi possivel Publicar', 'Erro ao Publicar');
      }
    },error=>{
      console.log(error);
      this.toastr.error('Não foi possível criar conta. Tente novamente mais tarde.', 'Erro Inesperado');
    })
  }
}
