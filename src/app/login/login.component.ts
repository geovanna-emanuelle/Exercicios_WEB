import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  async onLogin() {
    try {
      const usuario = await this.usuarioService.getUsuario(
        this.email,
        this.senha
      );
      if (usuario) {
        this.router.navigate(['/principal']);
      } else {
        alert('E-mail ou senha inválido!');
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      alert('E-mail ou senha inválido!');
    }
  }
}
