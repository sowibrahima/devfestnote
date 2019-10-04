import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsPageModule)
  },
  {
    path: 'sessions/:id',
    loadChildren: () => import('./sessiondetail/sessiondetail.module').then(m => m.SessiondetailPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsPageModule' },
  { path: 'sessiondetail', loadChildren: './sessiondetail/sessiondetail.module#SessiondetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
