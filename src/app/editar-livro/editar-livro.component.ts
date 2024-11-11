import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livro } from '../models/livro.model';
import { ActivatedRoute } from '@angular/router';
import { LIVROS } from '../livro/mock-livros';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar-livro',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css'
})
export class EditarLivroComponent implements OnInit {
  livro: Livro | undefined;
  livros: Livro[] = LIVROS;
  livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
  todosLivros: Livro[] = [...LIVROS, ...this.livrosLocalStorage];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const livroId = this.route.snapshot.paramMap.get('id');
    console.log(livroId)

    if (livroId) {
      const livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');

      const todosLivros: Livro[] = [...LIVROS, ...livrosLocalStorage];

      this.livro = todosLivros.find(livro => livro.id === livroId.toString());

      if (this.livro) {
        console.log('Livro encontrado:', this.livro);
      } else {
        console.log('Livro não encontrado');
      }
    }
  }

  editarLivro(livroEditado: Livro): void {
    if (this.livro) {
      const livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
      const todosLivros: Livro[] = [...LIVROS, ...livrosLocalStorage];

      const livrosAtualizados = this.editar(todosLivros, livroEditado);

      localStorage.setItem('livros', JSON.stringify(livrosAtualizados));

      console.log('Livro atualizado:', livroEditado);
    }
  }

  editar(livros: Livro[], livroEditado: Livro): Livro[] {
    return livros.map(livro => livro.id === livroEditado.id ? livroEditado : livro);
  }
}
