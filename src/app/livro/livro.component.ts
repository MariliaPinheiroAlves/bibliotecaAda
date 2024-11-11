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
  todosLivros: Livro[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    const livrosNoStorage = localStorage.getItem('livros');

    if (!livrosNoStorage) {
      localStorage.setItem('livros', JSON.stringify(LIVROS));
      this.todosLivros = LIVROS;
    } else {
      this.livrosLocalStorage = JSON.parse(livrosNoStorage);
      this.todosLivros = [...this.livrosLocalStorage];
    }

    console.log(this.todosLivros);
  }

  removerLivro(livro: Livro) {
    const confirmaExclusao = confirm(`Tem certeza que deseja excluir o livro "${livro.titulo}"?`);

    if (confirmaExclusao) {
      this.todosLivros = this.livroService.remover(this.todosLivros, livro);

      localStorage.setItem('livros', JSON.stringify(this.todosLivros));

      console.log('Livro removido:', livro);
    }
  }
}
