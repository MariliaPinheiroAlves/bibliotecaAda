import { v4 as uuid } from 'uuid'
import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../models/livro.model'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() livrosAtualizados = new EventEmitter<Livro[]>();

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    descricao: '',
    foto: ''
  };

  constructor(private readonly router: Router) { }

  salvarLivro(): void {
    if (this.livro.titulo && this.livro.autor && this.livro.descricao && this.livro.foto) {
      this.livro.id = uuid();
      const livros = this.obterLivrosDoStorage();
      livros.push(this.livro);
      this.salvarLivrosNoStorage(livros);

      alert('Livro cadastrado com sucesso!');
      this.limparFormulario();
      this.livrosAtualizados.emit(livros);

      this.router.navigate(['/']);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  private obterLivrosDoStorage(): Livro[] {
    return JSON.parse(localStorage.getItem('livros') || '[]');
  }

  private salvarLivrosNoStorage(livros: Livro[]): void {
    localStorage.setItem('livros', JSON.stringify(livros));
  }

  private limparFormulario(): void {
    this.livro = { id: '', titulo: '', autor: '', descricao: '', foto: '' };
  }
}
