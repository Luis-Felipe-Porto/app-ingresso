import { Component } from '@angular/core';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { CardTicketComponent } from '../card-ticket/card-ticket.component';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'send-negotiation',
  standalone: true,
  imports: [ToolBarComponent,CardTicketComponent,MatIconModule],
  templateUrl: './send-negotiation.component.html',
  styleUrl: './send-negotiation.component.scss'
})
export class SendNegotiationComponent {

}
