import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor() {}

  async getUsuarios(): Promise<any[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    return response.json();
  }

  async getUsuario(email: string, senha: string): Promise<any> {
    const response = await fetch(`${this.url}?email=${email}&senha=${senha}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuário');
    }
    const usuarios = await response.json();
    return usuarios.length > 0 ? usuarios[0] : null;
  }
}
