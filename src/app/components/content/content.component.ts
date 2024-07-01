import { Component } from '@angular/core';
import { CardTicketComponent } from '../card-ticket/card-ticket.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [CardTicketComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
