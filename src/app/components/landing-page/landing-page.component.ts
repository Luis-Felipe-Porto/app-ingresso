import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router){
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
