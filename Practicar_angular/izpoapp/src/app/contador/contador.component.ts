import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
 valorcontador: number = 0;
 incrementarvalor() {
    this.valorcontador++;
 }
 decrementarvalor() {
    this.valorcontador--;
 }
}