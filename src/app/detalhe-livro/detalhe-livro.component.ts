import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../models/livro.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalhe-livro',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {
  livro: Livro | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const livroId = this.route.snapshot.paramMap.get('id');
    console.log('Livro ID:', livroId);
  
    if (livroId) {
      const livros: Livro[] = JSON.parse(localStorage.getItem('livros') || '[]');
      console.log('Livros no LocalStorage:', livros); 
  
      this.livro = livros.find(livro => livro.id === livroId);
      console.log('Livro encontrado:', this.livro);
    }
  }
  
}
