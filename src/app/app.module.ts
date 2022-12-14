import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AlbumsHistoriaComponent } from './albums-historia/albums-historia.component';
import { AlbumsDiscosComponent } from './albums-discos/albums-discos.component';
import { AlbumsFavoritosComponent } from './albums-favoritos/albums-favoritos.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumsHistoriaComponent,
    AlbumsDiscosComponent,
    AlbumsFavoritosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
