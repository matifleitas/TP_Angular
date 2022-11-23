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
      "descripcion":"Disco que cuenta con la particularidad en primer lugar que es la primera vez como vocalista de Brian Johnson , quien sustituyó a Bon Scott  tras su trágica muerte.",
      "estilo":"Hard Rock, Heavy Metal.",
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
    {
      "nombre":"The Dark Side of the Moon",
      "banda":"Pink Floyd",
      "descripcion":"La temática del álbum incluye el conflicto, la avaricia, el envejecimiento, el significado de la vida, el miedo a la muerte y la enfermedad mental",
      "estilo":"Rock, Rock progresivo, Rock psicodélico, Hard rock, Art rock, Música psicodélica, Rock espacial, Rock experimental.",
      "anio": "1 de marzo de 1973",
      "imagen":"assets/img/DarkSideOfTheMoon.jpg",
      "uranio": false,
      "diamante": true,
      "platino": false,
    },
    {
      "nombre":"Use Your Illusion I",
      "banda":"Guns N' Roses",
      "descripcion":"Use Your Illusion I representa un punto de cambio en el sonido de Guns N' Roses. A pesar de no abandonar sus tendencias hard rock",
      "estilo":"Hard rock, blues rock, heavy metal, soft rock",
      "anio": "17 de septiembre de 1991",
      "imagen":"assets/img/UseYourIlusionI.jpg",
      "uranio": false,
      "diamante": true,
      "platino": false,
    },
    {
      "nombre":"The Doors",
      "banda":"The Doors",
      "descripcion":"The Doors es el primer álbum de estudio del grupo estadounidense The Doors.",
      "estilo":"Rock, Rock psicodélico, Blues rock, Hard rock",
      "anio": "4 de enero de 1967",
      "imagen":"assets/img/TheDoors.jpg",
      "uranio": false,
      "diamante": true,
      "platino": false,
    },
    {
      "nombre":"Band of Gypsys",
      "banda":"Jimi Hendrix",
      "descripcion":"Se llamaron a sí mismos Band of Gypsys y realizaron una legendaria sesión de cuatro noches en el auditorio Fillmore East de Nueva York.",
      "estilo":"Rock, Rock psicodélico, Rhythm and blues, Hard rock, Funk, Blues rock",
      "anio": "25 de marzo de 1970",
      "imagen":"assets/img/BandOfGyspys.jpg",
      "uranio": false,
      "diamante": false,
      "platino": true,
    },
  ];
  

  constructor(private favorito: AlbumsSeccionFavoritosService) { 

   }


  ngOnInit(): void {
  }

  addAlbumFavorito(albums: Album): void {
    this.favorito.addAlbumFavorito(albums);
  }
}
