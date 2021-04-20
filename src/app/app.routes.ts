import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { Routes } from "@angular/router";
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];
