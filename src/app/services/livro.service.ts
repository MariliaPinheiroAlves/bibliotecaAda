import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor() { }

  remove(livros: Livro[], livro: Livro) {
    return livros.filter((l) => livro.titulo !== l.titulo);
  }

  editar(livros: Livro[], livroAtualizado: Livro): void {
    console.log('editarService');

    // MUDAR RETORNO DO FUNÇÃO PARA ====> Livro[]

    // return livros.map((livro) =>
    //   livro.titulo === livroAtualizado.titulo ? livroAtualizado : livro
    // );
  }
}
