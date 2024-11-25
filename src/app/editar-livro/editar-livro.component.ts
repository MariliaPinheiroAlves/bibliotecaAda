import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livro } from '../models/livro.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-livro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css'
})

export class EditarLivroComponent implements OnInit {
  livro: Livro | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.carregarLivro();
  }

  private carregarLivro(): void {
    const livroId = this.route.snapshot.paramMap.get('id');

    if (livroId) {
      this.livro = this.buscarLivroPorId(livroId);
      if (this.livro) {
        console.log('Livro encontrado:', this.livro);
      } else {
        console.log('Livro não encontrado');
      }
    }
  }

  private buscarLivroPorId(id: string): Livro | undefined {
    const todosLivros = this.getLivrosFromStorage();
    return todosLivros.find(livro => livro.id === id);
  }

  editarLivro(livroEditado: Livro): void {
    if (this.livro) {
      const livrosAtualizados = this.editar(this.getLivrosFromStorage(), livroEditado);
      this.salvarLivrosNoStorage(livrosAtualizados);

      alert('Alterações salvas');

      this.livro = this.buscarLivroPorId(livroEditado.id);  //

      this.router.navigate(['/']);
    }
  }

  private getLivrosFromStorage(): Livro[] {
    return JSON.parse(localStorage.getItem('livros') || '[]');
  }

  private salvarLivrosNoStorage(livros: Livro[]): void {
    localStorage.setItem('livros', JSON.stringify(livros));
  }

  private editar(livros: Livro[], livroEditado: Livro): Livro[] {
    return livros.map(livro => livro.id === livroEditado.id ? livroEditado : livro);
  }
}