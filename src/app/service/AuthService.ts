import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Armazena o token no localStorage ou sessionStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  setIdIndentify(id: string): void {
    localStorage.setItem('idIndentify', id);
  }
  setPid(pid: string): void {
    localStorage.setItem('pid', pid);
  }

  // Obtém o token armazenado
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  getId(): string | null {
    return localStorage.getItem('idIndentify');
  }
  getPid(): string | null {
    return localStorage.getItem('pid');
  }

  // Verifica se o usuário está autenticado (se o token existe e é válido)
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const token = this.getToken();
      return !!token;
    }
    return false;  // Retorna true se o token existe
  }

  // Remove o token (logout)
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('idIndentify');
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}