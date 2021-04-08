import { Pipe, PipeTransform } from '@angular/core';

import { Equipamentos } from './equipamentos';

@Pipe({ name: 'filtrarEquipamentos' })
export class FiltrarEquipamentos implements PipeTransform{
    transform(equipamentos: Equipamentos[], descricao: string) {

        if (descricao) { 
            return equipamentos.filter(equipamento => 
                equipamento.EquipmentName.includes(descricao)    
            )
        } else {
            return equipamentos
        }
    }
}