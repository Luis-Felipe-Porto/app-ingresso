import { Component } from '@angular/core';

import { PixGeneratorService } from '../../service/PixGeneratorService';
import { ToolBarComponent } from "../../components/tool-bar/tool-bar.component";



@Component({
  selector: 'app-payment-confirm',
  standalone: true,
  imports: [ToolBarComponent],
  templateUrl: './payment-confirm.component.html',
  styleUrl: './payment-confirm.component.scss'
})
export class PaymentConfirmComponent {
  copiaECola: string;
  qrCodeDataUrl = '';

  constructor(private pixService: PixGeneratorService) {
    this.copiaECola = this.pixService.gerarPixCopiaECola('Luis Porto', 'SAO LUIS', 50.00);
  }
  async ngOnInit() {
    const QRCode = await import('qrcode');
    this.qrCodeDataUrl = await QRCode.toDataURL(this.copiaECola);
  }
  pagar(){
    navigator.clipboard.writeText(this.copiaECola).then(() => {
      
    }).catch(err => {
      console.error('Erro ao copiar Pix:', err);
    });
  }
}
