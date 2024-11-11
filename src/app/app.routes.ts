import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { LivroComponent } from './livro/livro.component';
import { FormComponent } from './form/form.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';

export const routes: Routes = [
  {
    path: '', component: LivroComponent
  },
  {
    path: 'detalhe/:id', component: DetalheLivroComponent
  },
  {
    path: 'cadastrar-livro', component: FormComponent
  },
  {
    path: 'editar-livro/:id', component: EditarLivroComponent
  }
];
