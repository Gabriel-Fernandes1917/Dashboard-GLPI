import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-chamados',
  templateUrl: './div-chamados.component.html',
  styleUrls: ['./div-chamados.component.css']
})
export class DivChamadosComponent implements OnInit{

  chamados: number[] = [8843, 8843, 8843, 8843 , 8843, 8843, 8843, 8843, 8843 , 8843];
  iconChamdo: string = "";
  constructor(){}
  ngOnInit() {

  }

  getChamado(){
    alert("clicou no chamado");
  }

}
