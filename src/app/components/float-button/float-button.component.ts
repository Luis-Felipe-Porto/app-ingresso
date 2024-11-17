import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'float-button',
  standalone: true,
  imports: [],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.scss'
})
export class FloatButtonComponent {
  @Output() clickEvent = new EventEmitter<void>(); // Evento para emitir cliques

  onClick() {
    this.clickEvent.emit();
  }
}
