import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../service/TicketService';
import { Router } from '@angular/router';
import { CardTicketComponent } from '../../components/card-ticket/card-ticket.component';
import { FloatButtonComponent } from '../../components/float-button/float-button.component';

interface Ticket {
  id: number;
  ticket:{
    title: string;
    price: number;
    subtitle: string
    description: string;
  };
  available: Boolean;
  sold: Boolean;
}

@Component({
  selector: 'my-tickets',
  standalone: true,
  imports: [CommonModule,ToolBarComponent,CardTicketComponent,FloatButtonComponent],
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.scss'
})
export class MyTicketsComponent {
  loading = true; // Flag para controlar o estado de carregamento
  error: string | null = null;
  tickets: Ticket[] = [];

  constructor(private service:TicketService,private router: Router){}

  ngOnInit() {
    this.loadTickets(); // Chama a função para carregar os tickets
  }

  loadTickets() {
    this.service.getTicketsByPeople().subscribe({
      next: (data) => {
        this.tickets = data.content;
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
