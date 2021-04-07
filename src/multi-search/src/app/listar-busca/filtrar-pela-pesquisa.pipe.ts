import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filtrarPelaPesquisa'})
export class FiltrarPelaPesquisa implements PipeTransform{
    transform(objetos: any, descricaoDaPesquisa: string) {
        descricaoDaPesquisa = descricaoDaPesquisa
            .trim()
            .toLocaleLowerCase()

        if (descricaoDaPesquisa) {
            let equipments = objetos.filter(objeto => 
                objeto.EquipmentName.toLocaleLowerCase().includes(descricaoDaPesquisa)
            )

            let materials = objetos.filter(objeto => 
                objeto.MaterialName.toLocaleLowerCase().includes(descricaoDaPesquisa)
            )

            let purchaseOrders = objetos.filter(objeto => 
                objeto.MaterialName.toLocaleLowerCase().includes(descricaoDaPesquisa)
            )

            let salesOrders = objetos.filter(objeto => 
                objeto.MaterialName.toLocaleLowerCase().includes(descricaoDaPesquisa)
            )

            let workforce = objetos.filter(objeto => 
                objeto.Name.toLocaleLowerCase().includes(descricaoDaPesquisa)
            )

            return equipments
        } else {
            return objetos
        }
    }
}