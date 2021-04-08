import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosCompraComponent } from './pedidos-compra.component';
import { FiltrarPedidosCompra } from './filtrar-pedidos-compra.pipe';

@NgModule({
  declarations: [
    PedidosCompraComponent,
    FiltrarPedidosCompra
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PedidosCompraComponent
  ]
})
export class PedidosCompraModule { }
