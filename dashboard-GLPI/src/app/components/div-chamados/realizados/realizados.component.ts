import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-realizados',
  templateUrl: './realizados.component.html',
  styleUrls: ['./realizados.component.css']
})
export class RealizadosComponent implements OnInit{

  @Input() chamados: number[];
  @Input() conSeta: string;
  @Input() demanda: number | string;

  constructor(){}
  ngOnInit() {

  }


}
