import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../model/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilmeService {
  
  private apiUrl = 'htpp://localhost:8080/filmes';
  private http = inject(HttpClient);

  findEmCartaz(): Observable<Filme[]> {
      return this.http.get<Filme[]>(this.apiUrl)
  }

}
