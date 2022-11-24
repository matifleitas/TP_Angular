import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './albums-list/album';

const URL = 'https://637fcb928efcfcedacf7d57c.mockapi.io/api/v1/Albumes';

@Injectable({
  providedIn: 'root'
})
export class AlbumsInfoService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(URL);
  }
}
