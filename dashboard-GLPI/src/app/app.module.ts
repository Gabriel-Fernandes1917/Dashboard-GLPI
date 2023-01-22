import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DivChamadosComponent } from './components/div-chamados/div-chamados.component';
import { DivAtividadesComponent } from './components/div-atividades/div-atividades.component';
import { RealizadosComponent } from './components/div-chamados/realizados/realizados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DivChamadosComponent,
    DivAtividadesComponent,
    RealizadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
