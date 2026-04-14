import { Component, Input } from '@angular/core';
import { Lugar } from '../../../core/model/lugar';

@Component({
  selector: 'app-assento',
  imports: [],
  templateUrl: './assento.html',
  styleUrl: './assento.css',
})
export class Assento {
    @Input() valor!: Lugar;
    
}
