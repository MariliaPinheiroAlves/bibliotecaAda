import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Livro } from './models/livro.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  livros: Livro[] = [
    {
      id: "1",
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      descricao: "Um dos romances mais conhecidos de Machado de Assis, narrado pelo enigmático Bentinho.",
      foto: "https://m.media-amazon.com/images/I/81ObqL6bR5S._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "2",
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      descricao: "Obra-prima do realismo mágico de Gabriel García Márquez, sobre a família Buendía em Macondo.",
      foto: "https://m.media-amazon.com/images/I/817esPahlrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "3",
      titulo: "Grande Sertão: Veredas",
      autor: "Guimarães Rosa",
      descricao: "Guimarães Rosa narra a épica jornada de Riobaldo e Diadorim pelo sertão brasileiro.",
      foto: "https://m.media-amazon.com/images/I/81NtboFZziL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "4",
      titulo: "O Aleph",
      autor: "Jorge Luis Borges",
      descricao: "Coletânea de contos de Jorge Luis Borges que explora temas como infinito e realidade.",
      foto: "https://m.media-amazon.com/images/I/91HJU0OjHML._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "5",
      titulo: "Vidas Secas",
      autor: "Graciliano Ramos",
      descricao: "Narrativa de Graciliano Ramos sobre a dura vida de uma família no sertão nordestino.",
      foto: "https://m.media-amazon.com/images/I/71NYL2AbBIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "6",
      titulo: "O Livro dos Abraços",
      autor: "Eduardo Galeano",
      descricao: "Eduardo Galeano mistura prosa poética e narrativas curtas sobre a América Latina.",
      foto: "https://m.media-amazon.com/images/I/71TQEiAsU7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "7",
      titulo: "Iracema",
      autor: "José de Alencar",
      descricao: "José de Alencar conta a história da indígena Iracema e sua relação com o colonizador Martim.",
      foto: "https://m.media-amazon.com/images/I/71LCDi6E2oL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "8",
      titulo: "A Casa dos Espíritos",
      autor: "Isabel Allende",
      descricao: "Isabel Allende narra as gerações da família Trueba em meio a eventos históricos do Chile.",
      foto: "https://m.media-amazon.com/images/I/91eujA9J0pL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "9",
      titulo: "O Guarani",
      autor: "José de Alencar",
      descricao: "Outro clássico de José de Alencar, sobre o índio Peri e seu amor por Ceci.",
      foto: "https://m.media-amazon.com/images/I/7125-MeD+KL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "10",
      titulo: "Memórias Póstumas de Brás Cubas",
      autor: "Machado de Assis",
      descricao: "Machado de Assis narra as memórias do excêntrico Brás Cubas, que escreve após sua morte.",
      foto: "https://m.media-amazon.com/images/I/815u+SBDpJL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "11",
      titulo: "Fervor de Buenos Aires",
      autor: "Jorge Luis Borges",
      descricao: "Primeiro livro de poesias de Jorge Luis Borges, dedicado à cidade de Buenos Aires.",
      foto: "https://m.media-amazon.com/images/I/61Tn2vGRTCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "12",
      titulo: "Os Sertões",
      autor: "Euclides da Cunha",
      descricao: "Obra de Euclides da Cunha sobre a Guerra de Canudos, misturando história e literatura.",
      foto: "https://m.media-amazon.com/images/I/91gnEooIQpL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "13",
      titulo: "Mar Morto",
      autor: "Jorge Amado",
      descricao: "Jorge Amado conta as histórias de pescadores e marinheiros na Bahia.",
      foto: "https://m.media-amazon.com/images/I/91UIdte7lLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "14",
      titulo: "La Tregua",
      autor: "Mario Benedetti",
      descricao: "Romance de Mario Benedetti sobre um homem solitário que se apaixona tardiamente.",
      foto: "https://m.media-amazon.com/images/I/71CbRWXBY6L._AC_UF1000,1000_QL80_.jpg"
    }
  ];
}