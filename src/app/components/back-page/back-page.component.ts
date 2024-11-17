import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'back-page',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './back-page.component.html',
  styleUrl: './back-page.component.scss'
})
export class BackPageComponent {

  constructor(private location: Location){}

  goBack() {
    this.location.back(); // Volta para a página anterior
  }  

}
