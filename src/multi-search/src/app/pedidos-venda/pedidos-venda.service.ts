import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PedidosVenda } from './pedidos-venda';

const URL = 'http://localhost:3001/sales_orders'

@Injectable({
  providedIn: 'root'
})
export class PedidosVendaService {

  constructor(private http: HttpClient) { }

  getPurchaseOrders() {
    return this.http.get<PedidosVenda[]>(URL)
  }
}
