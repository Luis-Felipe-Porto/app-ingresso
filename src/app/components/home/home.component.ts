import { Component } from '@angular/core';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolBarComponent,ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
