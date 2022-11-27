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
  mostrar: Boolean = false;
  mensaje: String = '';
  mensaje_enlace: String = 'Mostrar albumes favoritos';

  mostrarOcultar() {

    if (this.mostrar) {
      this.mostrar = false;
      this.mensaje_enlace = 'Mostrar albumes favoritos';

    }else {
      this.mostrar = true;
      this.mensaje_enlace = 'Ocultar albumes favoritos';
    }
  }


  listaFavoritos$: Observable<Album[]>;
  constructor(private favorito: AlbumsSeccionFavoritosService) { 
    this.listaFavoritos$ = favorito.listaFavoritos.asObservable();
  }
}
