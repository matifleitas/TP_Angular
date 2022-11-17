import { Component } from '@angular/core';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  disco = {
  "nombre":"NOC",
  "banda":"ACDC",
  "descripcion":"lorem",
  "estilo":"noc",
  "anio":"1990",
  "image":"assets/img/BackInBlack.jpg"
  }

}
