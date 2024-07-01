import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [MatIconModule,NgOptimizedImage],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
