import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UpdatePage } from './update/update.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'estoques',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'estoques',
    loadChildren: () => import('./estoques/estoques.module').then( m => m.EstoquesPageModule)
  },
  {
    path: 'saidas',
    loadChildren: () => import('./saidas/saidas.module').then( m => m.SaidasPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {path:'update-produto/:id', component : UpdatePage},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
