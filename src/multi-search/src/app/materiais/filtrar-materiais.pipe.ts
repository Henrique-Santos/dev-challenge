import { Pipe, PipeTransform } from '@angular/core';

import { Materiais } from './materiais';

@Pipe({ name: 'filtrarMateriais' })
export class FiltrarMateriais implements PipeTransform{
    transform(materiais: Materiais[], descricao: string) {

        if (descricao) { 
            return materiais.filter(material => 
                material.MaterialName.includes(descricao)    
            )
        } else {
            return materiais
        }
    }
}