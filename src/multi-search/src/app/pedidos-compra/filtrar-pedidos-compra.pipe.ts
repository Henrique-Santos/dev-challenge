import { Pipe, PipeTransform } from '@angular/core';

import { PedidosCompra } from './pedidos-compra';

@Pipe({ name: 'filtrarPedidosVenda' })
export class FiltrarPedidosCompra implements PipeTransform{
    transform(pedidos: PedidosCompra[], descricao: string) {

        if (descricao) { 
            return pedidos.filter(pedido => 
                pedido.MaterialName.includes(descricao)    
            )
        } else {
            return pedidos
        }
    }
}