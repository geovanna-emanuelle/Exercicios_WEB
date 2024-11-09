import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss', 
})
export class PrincipalComponent implements OnInit {
  usuarios: any[] = [];
  texto: string = '';  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  async carregarUsuarios() {
    try {
      this.usuarios = await this.usuarioService.getUsuarios();  
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  }

  pesquisar(): void {
    if (this.texto.trim()) {
      // Filtro
      this.usuarios = this.usuarios.filter((usuario) =>
        usuario.nome.toLowerCase().includes(this.texto.toLowerCase())
      );
    } else {
      this.carregarUsuarios();  
    }
  }

  limparFiltro(): void {
    this.texto = '';  
    this.carregarUsuarios();  
  }
}