import { Pipe, PipeTransform } from '@angular/core';

import { MaoDeObra } from './mao-de-obra';

@Pipe({ name: 'filtrarMaoDeObra' })
export class FiltrarMaoDeObra implements PipeTransform{
    transform(maosDeObra: MaoDeObra[], descricao: string) {

        if (descricao) { 
            return maosDeObra.filter(maoDeObra => 
                maoDeObra.Name.includes(descricao)    
            )
        } else {
            return maosDeObra
        }
    }
}