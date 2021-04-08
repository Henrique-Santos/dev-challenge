import { Component, Input, OnInit } from '@angular/core';

import { PedidosCompra } from './pedidos-compra';
import { PedidosCompraService } from './pedidos-compra.service';

@Component({
  selector: 'app-pedidos-compra',
  templateUrl: './pedidos-compra.component.html',
  styleUrls: ['./pedidos-compra.component.css']
})
export class PedidosCompraComponent implements OnInit {

  purchaseOrders: PedidosCompra[] = []
  @Input() purchaseOrdersSearch: string = ''

  constructor(private pedidosCompraService: PedidosCompraService) { }

  ngOnInit(): void {
    this.pedidosCompraService
      .getPurchaseOrders()
      .subscribe(purchaseOrder => this.purchaseOrders = purchaseOrder)
  }

}
