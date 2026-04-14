import { Component } from '@angular/core';
import { Assento } from "../../../shared/components/assento/assento";
import { Lugar } from '../../../core/model/lugar';

@Component({
  selector: 'app-lugares',
  imports: [Assento],
  templateUrl: './lugares.html',
  styleUrl: './lugares.css',
})
export class Lugares {
  assentos: Lugar[] = [ {id: 10, fileira: 'A', posicao: 1, disponivel: true },
  {id: 20, fileira: 'A', posicao: 2, disponivel: true },
{id: 30, fileira: 'A', posicao: 3, disponivel: false },
{id: 40, fileira: 'A', posicao: 4, disponivel: false },
{id: 50, fileira: 'A', posicao: 5, disponivel: true }]
}
