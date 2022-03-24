import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../pages/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'achat',
        loadChildren: () => import('../pages/achat/achat.module').then(m => m.AchatPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../pages/recherche/recherche.module').then(m => m.RecherchePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../pages/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
