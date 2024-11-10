import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  atualizarLivrosNoLocalStorage(livros: Livro[]) {
    localStorage.setItem('livros', JSON.stringify(livros));
  }

  remove(livros: Livro[], livro: Livro): Livro[] {
    return livros.filter(l => l.id !== livro.id);
  }

  editar(livros: Livro[], livroEditado: Livro): Livro[] {
    return livros.map(livro => livro.id === livroEditado.id ? livroEditado : livro);
  }
}
