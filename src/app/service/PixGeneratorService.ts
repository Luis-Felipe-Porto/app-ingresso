import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixGeneratorService {

  gerarChavePixAleatoria(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  private montarCampo(id: string, valor: string): string {
    const tamanho = valor.length.toString().padStart(2, '0');
    return `${id}${tamanho}${valor}`;
  }

  gerarPixCopiaECola(nome: string, cidade: string, valor?: number): string {
    const chavePix = this.gerarChavePixAleatoria();

    let payload = '';
    payload += this.montarCampo('00', '01');
    payload += this.montarCampo('26',
      this.montarCampo('00', 'BR.GOV.BCB.PIX') +
      this.montarCampo('01', chavePix)
    );
    payload += this.montarCampo('52', '0000');
    payload += this.montarCampo('53', '986');
    if (valor) {
      payload += this.montarCampo('54', valor.toFixed(2));
    }
    payload += this.montarCampo('58', 'BR');
    payload += this.montarCampo('59', nome.slice(0, 25));
    payload += this.montarCampo('60', cidade.slice(0, 15));
    payload += this.montarCampo('62', this.montarCampo('05', '***'));
    payload += '6304';

    const crc = this.calcularCRC16(payload);
    return payload + crc;
  }

  private calcularCRC16(str: string): string {
    let crc = 0xFFFF;
    for (let c of str) {
      crc ^= c.charCodeAt(0) << 8;
      for (let i = 0; i < 8; i++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : (crc << 1);
        crc &= 0xFFFF;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }
}