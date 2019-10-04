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
    path: 'device-infos',
    loadChildren: () => import('./device-infos/device-infos.module').then(m => m.DeviceInfosPageModule)
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
    path: 'speakers',
    loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersPageModule)
  },
  {
    path: 'speakers/:name',
    loadChildren: () => import('./speakers-details/speakers-details.module').then(m => m.SpeakersDetailsPageModule)
  },

  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsPageModule' },
  { path: 'sessiondetail', loadChildren: './sessiondetail/sessiondetail.module#SessiondetailPageModule' },
  { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersPageModule' },
  { path: 'speakers-details', loadChildren: './speakers-details/speakers-details.module#SpeakersDetailsPageModule' },
  { path: 'device-infos', loadChildren: './device-infos/device-infos.module#DeviceInfosPageModule' }

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
