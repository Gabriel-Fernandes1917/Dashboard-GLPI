import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-chamados',
  templateUrl: './div-chamados.component.html',
  styleUrls: ['./div-chamados.component.css']
})
export class DivChamadosComponent implements OnInit{

  iconPeriodo: string = " ";

  ngOnInit() {
   this.iconPeriodo = "../../../assets/vector.png";
  }

}
