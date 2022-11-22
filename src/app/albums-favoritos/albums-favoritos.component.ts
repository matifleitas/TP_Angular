import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../albums-list/album';
import { AlbumsSeccionFavoritosService } from '../albums-seccion-favoritos.service';

@Component({
  selector: 'app-albums-favoritos',
  templateUrl: './albums-favoritos.component.html',
  styleUrls: ['./albums-favoritos.component.scss']
})
export class AlbumsFavoritosComponent {

  listaFavoritos$: Observable<Album[]>;
  constructor(private favorito: AlbumsSeccionFavoritosService) { 
    this.listaFavoritos$ = favorito.listaFavoritos.asObservable();
  }
}
