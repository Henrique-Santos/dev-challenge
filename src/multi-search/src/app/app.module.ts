import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListarBuscaComponent } from './listar-busca/listar-busca.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { PedidosCompraComponent } from './pedidos-compra/pedidos-compra.component';
import { PedidosVendaComponent } from './pedidos-venda/pedidos-venda.component';
import { MaoDeObraComponent } from './mao-de-obra/mao-de-obra.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PesquisaComponent,
    ListarBuscaComponent,
    EquipamentosComponent,
    MateriaisComponent,
    PedidosCompraComponent,
    PedidosVendaComponent,
    MaoDeObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
