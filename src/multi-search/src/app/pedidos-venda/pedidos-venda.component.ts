import { Component, OnInit } from '@angular/core';

import { PedidosVendaService } from './pedidos-venda.service';
import { PedidosVenda } from './pedidos-venda';

@Component({
  selector: 'app-pedidos-venda',
  templateUrl: './pedidos-venda.component.html',
  styleUrls: ['./pedidos-venda.component.css']
})
export class PedidosVendaComponent implements OnInit {

  salesOrders: PedidosVenda[] = []

  constructor(private pedidosVendaService: PedidosVendaService) { }

  ngOnInit(): void {
    this.pedidosVendaService
      .getPurchaseOrders()
      .subscribe(salesOrder => this.salesOrders = salesOrder)
  }

}
