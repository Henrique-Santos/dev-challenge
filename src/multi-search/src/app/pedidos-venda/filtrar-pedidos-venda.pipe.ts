import { Pipe, PipeTransform } from '@angular/core';

import { PedidosVenda } from './pedidos-venda';

@Pipe({ name: 'filtrarPedidosVenda' })
export class FiltrarPedidosVenda implements PipeTransform{
    transform(pedidos: PedidosVenda[], descricao: string) {

        if (descricao) { 
            return pedidos.filter(pedido => 
                pedido.MaterialName.includes(descricao)    
            )
        } else {
            return pedidos
        }
    }
}