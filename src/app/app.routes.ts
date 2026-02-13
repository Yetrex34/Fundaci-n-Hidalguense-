import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Programas } from './pages/programas/programas';
import { Galeria } from './pages/galeria/galeria';

export const routes: Routes = [
  { path: '', component: Home }, // Página de Inicio
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'programas', component: Programas },
  { path: 'galeria', component: Galeria },
  { path: '**', redirectTo: '' } // Si se equivocan, vuelven al inicio
];