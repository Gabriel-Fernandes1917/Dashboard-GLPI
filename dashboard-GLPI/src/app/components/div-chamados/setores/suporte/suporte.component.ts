import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {

  @Input() chamados: number[];
  @Input() conSeta: string;
  @Input() demanda: number | string;

  

}
