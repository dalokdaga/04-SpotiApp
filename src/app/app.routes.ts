import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];
