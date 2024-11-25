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
  todosLivros: Livro[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.carregarLivros();
  }

  private carregarLivros() {
    const livrosNoStorage = localStorage.getItem('livros');

    if (livrosNoStorage) {
      this.todosLivros = JSON.parse(livrosNoStorage);
    } else {
      this.salvarLivrosNoStorage(LIVROS);
      this.todosLivros = LIVROS;
    }
  }

  private salvarLivrosNoStorage(livros: Livro[]) {
    localStorage.setItem('livros', JSON.stringify(livros));
  }


  removerLivro(livro: Livro) {
    const confirmaExclusao = confirm(`Tem certeza que deseja excluir o livro "${livro.titulo}"?`);

    if (confirmaExclusao) {
      this.todosLivros = this.livroService.remover(this.todosLivros, livro);

      localStorage.setItem('livros', JSON.stringify(this.todosLivros));
    }
  }
}
