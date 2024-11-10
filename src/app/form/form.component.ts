import { Component } from '@angular/core';
import { Livro } from '../models/livro.model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    descricao: '',
    foto: ''
  };

  salvarLivro() {
    if (this.livro.id && this.livro.titulo && this.livro.autor && this.livro.descricao && this.livro.foto) {
      const livros: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
      livros.push(this.livro);
      localStorage.setItem('livros', JSON.stringify(livros));
      alert('Livro cadastrado com sucesso!');
      this.limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  limparFormulario() {
    this.livro = {
      id: '',
      titulo: '',
      autor: '',
      descricao: '',
      foto: ''
    };
  }
}
