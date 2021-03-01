import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'musica-tradicional',
    loadChildren: () => import('./pages/musica-tradicional/musica-tradicional.module').then( m => m.MusicaTradicionalPageModule)
  },
  {
    path: 'tradiciones',
    loadChildren: () => import('./pages/tradiciones/tradiciones.module').then( m => m.TradicionesPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'reportaje',
    loadChildren: () => import('./pages/reportaje/reportaje.module').then( m => m.ReportajePageModule)
  },
  {
    path: 'cuentos',
    loadChildren: () => import('./pages/cuentos/cuentos.module').then( m => m.CuentosPageModule)
  },
  {
    path: 'cumpleanos',
    loadChildren: () => import('./pages/cumpleanos/cumpleanos.module').then( m => m.CumpleanosPageModule)
  },
  {
    path: 'canciones',
    loadChildren: () => import('./pages/canciones/canciones.module').then( m => m.CancionesPageModule)
  },
  {
    path: 'letras',
    loadChildren: () => import('./pages/letras/letras.module').then( m => m.LetrasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
