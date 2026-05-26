import { Component, inject, OnInit } from '@angular/core';
import { CardFilme } from "../card-filme/card-filme";
import { Container } from "../container/container";
import { Filme } from '../../../core/model/filme';
import { FilmeService } from '../../../core/services/filme-service';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme, Container, AsyncPipe],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css',
})

export class EmCartaz implements OnInit{
  

  private filmeService = inject(FilmeService);
    filmes:Observable<Filme[]> = of([]) 

  ngOnInit(): void {

    this.filmes = this.filmeService.findEmCartaz();

  }


  
}
