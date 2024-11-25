import { Routes } from '@angular/router';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { LivroComponent } from './livro/livro.component';
import { FormComponent } from './form/form.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
  {
    path: '', component: LivroComponent
  },
  {
    path: 'livro/:id', component: DetalheLivroComponent
  },
  {
    path: 'cadastrar-livro', component: FormComponent
  },
  {
    path: 'editar-livro/:id', component: EditarLivroComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];
