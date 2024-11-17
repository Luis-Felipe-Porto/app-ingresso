import { Component,OnInit } from '@angular/core';
import { CardTicketComponent } from '../card-ticket/card-ticket.component';
import { TicketService } from '../../service/TicketService';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from '../float-button/float-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'content',
  standalone: true,
  imports: [CommonModule,CardTicketComponent,FloatButtonComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  items: any[] = []; // Array para armazenar os dados da API
  loading = true; // Flag para controlar o estado de carregamento
  error: string | null = null;
  constructor(private service:TicketService,private router: Router){}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.service.getTickets().subscribe({
      next: (data) => {
        this.items = data.content;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar dados da API.';
        console.error(err);
        this.loading = false;
      }
    });
  }
  addTicket() {
    this.router.navigateByUrl('/sale');
  }

}
