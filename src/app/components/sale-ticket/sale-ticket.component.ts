import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'sale-ticket',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage],
  templateUrl: './sale-ticket.component.html',
  styleUrl: './sale-ticket.component.scss'
})
export class SaleTicketComponent {

}
