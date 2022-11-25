import { Component } from '@angular/core';
import { AlbumsInfoService } from '../albums-info.service';
import { AlbumsSeccionFavoritosService } from '../albums-seccion-favoritos.service';
import { Album } from './album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  albums: Album[] = [];


  constructor(
    private favorito: AlbumsSeccionFavoritosService,
    private albumsInfoService: AlbumsInfoService) { 

   }


  ngOnInit(): void {
    this.albumsInfoService.getAll()
    .subscribe(albums => this.albums = albums);
  }

  addAlbumFavorito(albums: Album): void {
    this.favorito.addAlbumFavorito(albums);
  }
}
