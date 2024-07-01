import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
