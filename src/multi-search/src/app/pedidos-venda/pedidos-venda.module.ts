import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaoDeObraModule } from './../mao-de-obra/mao-de-obra.module';
import { MateriaisModule } from './../materiais/materiais.module';
import { PedidosCompraModule } from './../pedidos-compra/pedidos-compra.module';
import { PesquisaModule } from './../pesquisa/pesquisa.module';
import { PedidosVendaComponent } from './pedidos-venda.component';
import { FiltrarPedidosVenda } from './filtrar-pedidos-venda.pipe';
import { EquipamentosModule } from '../equipamentos/equipamentos.module';


@NgModule({
  declarations: [
    PedidosVendaComponent,
    FiltrarPedidosVenda
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PesquisaModule,
    PedidosCompraModule,
    MateriaisModule,
    EquipamentosModule,
    MaoDeObraModule
  ],
  exports: [
    PedidosVendaComponent
  ]
})
export class PedidosVendaModule { }
