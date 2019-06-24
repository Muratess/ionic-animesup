import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'topanimes', loadChildren: './pages/topanimes/topanimes.module#TopanimesPageModule', canActivate: [LoginGuard]},
  { path: 'generos', loadChildren: './pages/generos/generos.module#GenerosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'config', loadChildren: './pages/config/config.module#ConfigPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'acao', loadChildren: './pages/generos/acao/acao.module#AcaoPageModule' },
  { path: 'aventura', loadChildren: './pages/generos/aventura/aventura.module#AventuraPageModule' },
  { path: 'horror', loadChildren: './pages/generos/horror/horror.module#HorrorPageModule' },
  { path: 'luta', loadChildren: './pages/generos/luta/luta.module#LutaPageModule' },
  { path: 'esporte', loadChildren: './pages/generos/esporte/esporte.module#EsportePageModule' },
  { path: 'ecchi', loadChildren: './pages/generos/ecchi/ecchi.module#EcchiPageModule' },
  { path: 'shoujo', loadChildren: './pages/generos/shoujo/shoujo.module#ShoujoPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
