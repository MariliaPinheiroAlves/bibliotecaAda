import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LIVROS } from './mock-livros';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})

export class LivroComponent implements OnInit {
  livros: Livro[] = LIVROS;
  livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
  todosLivros: Livro[] = [...LIVROS, ...this.livrosLocalStorage]

  constructor(private livroService: LivroService) { }

  ngOnInit() { }

  removerLivro(livro: Livro) {
    const confirmaExclusao = confirm(`Tem certeza que deseja excluir o livro "${livro.titulo}"?`);

    if (confirmaExclusao) {
      this.todosLivros = this.livroService.remover(this.todosLivros, livro);
    }
  }

  editarLivro(livro: Livro) {
    // ADICIONAR PARAMETRO PARA ESSA FUNÇÃO ======> livroAtualizado: Livro
    console.log(livro);
    this.livros.forEach((livro) => console.log(livro));
    // this.livros = this.livroService.editar(this.livros, livroAtualizado);
  }
}
