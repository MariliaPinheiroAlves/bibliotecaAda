import { Component, Input } from '@angular/core';
import { Livro } from '../models/livro.model';
import { CommonModule } from '@angular/common';
import { LivroService } from '../services/livro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})

export class LivroComponent {
  @Input() livros: Livro[] = [];

  constructor(private livroService: LivroService) { }

  removerLivro(livro: Livro) {
    const confirmaExclusao = confirm(`Tem certeza que deseja excluir o livro "${livro.titulo}"?`);
    if (confirmaExclusao) {
      this.livros = this.livroService.remover(this.livros, livro);
    }
  }

  editarLivro(livro: Livro) {
    // Aqui vai o formulário ou modal pra pegar as novas informações do livro
    const livroAtualizado: Livro = { 
      ...livro, 
      titulo: "Novo título", 
      autor: "Novo autor", 
      descricao: "Nova descrição", 
      foto: "nova-url-foto.jpg"
    };
    console.log(livro);
    this.livros = this.livroService.editar(this.livros, livroAtualizado);
  }
};
