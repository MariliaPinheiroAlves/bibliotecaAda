import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent
},
{
    path: 'detalhe/:id', component: DetalheLivroComponent
}
];
