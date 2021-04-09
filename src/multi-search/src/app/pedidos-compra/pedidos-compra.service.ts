import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PedidosCompra } from './pedidos-compra';

const URL = 'http://localhost:3002/purchase_orders'

@Injectable({
  providedIn: 'root'
})
export class PedidosCompraService {

  constructor(private http: HttpClient) { }

  getPurchaseOrders() {
    return this.http.get<PedidosCompra[]>(URL)
  }
}
