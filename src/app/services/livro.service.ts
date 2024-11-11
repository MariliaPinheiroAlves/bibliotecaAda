import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  atualizarLivrosNoLocalStorage(livros: Livro[]) {
    localStorage.setItem('livros', JSON.stringify(livros));
  }

  remover(livros: Livro[], livro: Livro): Livro[] {
    const livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
    const existeNoLocalStorage = livrosLocalStorage.some(l => l.id === livro.id);

    if (existeNoLocalStorage) {
      const livrosAtualizados = livrosLocalStorage.filter(l => l.id !== livro.id);
      this.atualizarLivrosNoLocalStorage(livrosAtualizados);
    }

    return livros.filter(l => l.id !== livro.id);
  }

  editar(livros: Livro[], livroEditado: Livro): Livro[] {
    return livros.map(livro => livro.id === livroEditado.id ? livroEditado : livro);
  }
}
