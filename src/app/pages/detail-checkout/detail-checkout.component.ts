import { Component } from '@angular/core';
import { CardTicketComponent } from "../../components/card-ticket/card-ticket.component";
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../service/TicketService';
import { Router } from '@angular/router';

interface Ticket {
  id: number;
  ticket:{
    title: string;
    price: number;
    subtitle: string
    description: string;
  }
}

@Component({
  selector: 'detail-checkout',
  standalone: true,
  imports: [CardTicketComponent,ToolBarComponent],
  templateUrl: './detail-checkout.component.html',
  styleUrl: './detail-checkout.component.scss'
})
export class DetailCheckoutComponent {
  ticketSale: Ticket | null = null;
  ticketId!: string;
  ticketDetails: any;
  error: string | null = null;

  constructor(private route: ActivatedRoute,private service:TicketService,private router: Router) {}

  isValidForm():boolean{
    return true;
  }
  ngOnInit(): void {
    // Obter o ID do ticket da rota
    this.ticketId = this.route.snapshot.paramMap.get('id')!;

    // Chamar o serviço para buscar os detalhes do ticket
    this.fetchTicketDetails(this.ticketId);
  }
  fetchTicketDetails(ticketId: string): void {
    // Exemplo de requisição ao serviço
    // Substitua pelo seu serviço de API real
    this.service.getTicketById(ticketId).subscribe({
      next: (data) => {
        this.ticketSale = data
        
      },
      error: (err) => {
        this.error = 'Erro ao carregar dados da API.';
        console.error(err);
      }
    });
  }

  detailTicket(){

  }
  calculateTranfered(): number |null {
    if(this.ticketSale != undefined){
      return this.ticketSale?.ticket.price * 0.05
    }
    return null;
  }
  claculateTotal(): number |null  {
    let total = this.calculateTranfered();

    if(total != null && this.ticketSale?.ticket != undefined){
      return total + this.ticketSale?.ticket.price;
    }
    return null;

  }
  gerarChavePix(valor:number){
    this.router.navigateByUrl('/payment-ticket');
  }

}
