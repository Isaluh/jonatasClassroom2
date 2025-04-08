import { Routes } from '@angular/router';
import { CadastroViewComponent } from './Views/cadastro-view/cadastro-view.component';
import { ListagemViewComponent } from './Views/listagem-view/listagem-view.component';

export const routes: Routes = [
    {path: '', component: CadastroViewComponent},
    {path: 'contatos', component: ListagemViewComponent}
];
