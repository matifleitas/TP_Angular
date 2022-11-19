import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsDiscosComponent } from './albums-discos/albums-discos.component';
import { AlbumsHistoriaComponent } from './albums-historia/albums-historia.component';

const routes: Routes = [
  {
    path: 'albumes',
    component: AlbumsDiscosComponent
  },
  {
    path: 'historia',
    component: AlbumsHistoriaComponent
  },
  {
    path: '',
    component: AlbumsDiscosComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
