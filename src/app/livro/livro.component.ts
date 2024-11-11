import { Component, Input } from '@angular/core';
import { Livro } from '../models/livro.model';
import { CommonModule } from '@angular/common';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
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

  editarLivro() {
    // ADICIONAR PARAMETRO PARA ESSA FUNÇÃO ======> livroAtualizado: Livro
    console.log('Editar livro');
    this.livros.forEach((livro) => console.log(livro));
    // this.livros = this.livroService.editar(this.livros, livroAtualizado);
  }
};
