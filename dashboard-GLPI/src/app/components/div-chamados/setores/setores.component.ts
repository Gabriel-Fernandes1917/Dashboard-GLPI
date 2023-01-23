import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent {

  @Input() chamados: number[];
  @Input() conSeta: string;
  @Input() demanda: number | string;
  
}
