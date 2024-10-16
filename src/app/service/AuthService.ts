import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  // Armazena o token no localStorage ou sessionStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Obtém o token armazenado
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verifica se o usuário está autenticado (se o token existe e é válido)
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;  // Retorna true se o token existe
  }

  // Remove o token (logout)
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}