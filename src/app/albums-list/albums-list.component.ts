import { Component } from '@angular/core';
import { Album } from './album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  albums: Album[] = [
    {
      "nombre":"NOC",
      "banda":"ACDC",
      "descripcion":"lorem",
      "estilo":"noc",
      "anio":1990,
      "imagen":"assets/img/BackInBlack.jpg",
      "uranio": true,
      "diamante": false,
      "platino": false,
    },
    {
      "nombre":"Led Zeppelin IV",
      "banda":"Led Zeppelin",
      "descripcion":"esta es otra",
      "estilo":"noc",
      "anio":1990,
      "imagen":"assets/img/LedZeppellinIv.jpg",
      "uranio": false,
      "diamante": true,
      "platino": false,
    },
  ];

  constructor() { }


  ngOnInit(): void {
  }

  // addFavorito(m: string) {
  //   alert(m);
  // }
}
