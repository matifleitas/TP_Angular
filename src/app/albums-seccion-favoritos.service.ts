import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './albums-list/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsSeccionFavoritosService {

    private _listaFavoritos: Album[] = [];
    listaFavoritos: BehaviorSubject<Album[]> = new BehaviorSubject(this._listaFavoritos);

    constructor() { }

  addAlbumFavorito(albums: Album) {
    let item: Album | undefined = this._listaFavoritos.find((v1) => v1.nombre == albums.nombre);
    if(!item) {
      this._listaFavoritos.push(albums)
    }
    console.log(this._listaFavoritos);
    this.listaFavoritos.next(this._listaFavoritos);
  
  }
  
}
