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
<<<<<<< HEAD
    // ADICIONAR PARAMETRO PARA ESSA FUNÇÃO ======> livroAtualizado: Livro
    console.log(livro);
    this.livros.forEach((livro) => console.log(livro));
    // this.livros = this.livroService.editar(this.livros, livroAtualizado);
=======
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
>>>>>>> 79d8a1b2c3bc6172da8fc8aa2ae50558c8313799
  }
}
