import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-chamados',
  templateUrl: './div-chamados.component.html',
  styleUrls: ['./div-chamados.component.css']
})
export class DivChamadosComponent implements OnInit{

  chamados: number[] = [];

  buscaPeriodo: any[] = [];
  iconSeta: string = "";
  demanda: number | string = 0;

  constructor(){}
  ngOnInit() {

    this.chamados = [8843, 8843, 8843, 8843 , 8843, 8843, 8843, 8843, 8843 , 8843];

    this.buscaPeriodo =  [{
      periodo: "novembro",
      chamados: [333,222,111,555,666,776,776]
    },
    {
      periodo: "dezembro",
      chamados: [222,111,555,666,776,222,111,555,666,776,776]
    }];


    this.checkDemanda(this.buscaPeriodo[0].chamados.length, this.buscaPeriodo[1].chamados.length);
  }

  checkDemanda(Data1: number,Data2: number){
    this.demanda = ((Data2-Data1)*100/Data2).toFixed(0);
    if(Data1 > Data2){
      this.iconSeta = "../../../assets/seta baixo.png";
    }else{
      this.iconSeta = "../../../assets/seta cima.png";
    }
  }

  getChamado(){
    alert("clicou no chamado");
  }

}
