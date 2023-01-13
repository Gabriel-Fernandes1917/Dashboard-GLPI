import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-chamados',
  templateUrl: './div-chamados.component.html',
  styleUrls: ['./div-chamados.component.css']
})
export class DivChamadosComponent implements OnInit{

  chamados: number[] = [8843, 8832, 8821, 8856,8845];
  iconChamdo: string = "";
  constructor(){}
  ngOnInit() {

  }

  getChamado(){
    
  }

}
