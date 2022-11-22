import { Component } from '@angular/core';
import { AlbumsSeccionFavoritosService } from '../albums-seccion-favoritos.service';
import { Album } from './album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  albums: Album[] = [
    {
      "nombre":"Back In Black",
      "banda":"ACDC",
      "descripcion":"lorem",
      "estilo":"Hard Rock",
      "anio":"25 de julio de 1980",
      "imagen":"assets/img/BackInBlack.jpg",
      "uranio": true,
      "diamante": false,
      "platino": false,
    },
    {
      "nombre":"Led Zeppelin IV",
      "banda":"Led Zeppelin",
      "descripcion":" Fue producido por Jimmy Page, guitarrista del grupo.",
      "estilo":"Hard rock, Heavy metal, Blues, Blues rock, Rock and roll, Folk rock, Música tradicional, Heavy metal tradicional",
      "anio": "8 de noviembre de 1971",
      "imagen":"assets/img/LedZeppellinIv.jpg",
      "uranio": false,
      "diamante": true,
      "platino": false,
    },
  ];
  

  constructor(private favorito: AlbumsSeccionFavoritosService) { 

   }


  ngOnInit(): void {
  }

  // addFavorito(m: string) {
  //   alert(m);
  // }
  addAlbumFavorito(albums): void {
    this.favorito.addAlbumFavorito(albums);
  }
}
