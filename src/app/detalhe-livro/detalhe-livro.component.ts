import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../models/livro.model';
import { NgIf } from '@angular/common';
import { LIVROS } from '../livro/mock-livros';

@Component({
  selector: 'app-detalhe-livro',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})

export class DetalheLivroComponent implements OnInit {
  livro: Livro | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const livroId = this.route.snapshot.paramMap.get('id');
    if (livroId) {
      const livrosLocalStorage: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');

      this.livro = livrosLocalStorage.find(livro => livro.id === livroId.toString());
      console.log('Livro encontrado:', this.livro);
    }
  }
}
