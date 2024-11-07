import { Component, Input } from '@angular/core';
import { Livro } from '../models/livro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livros: Livro[] = [];
}
