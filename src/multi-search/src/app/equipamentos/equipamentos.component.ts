import { Component, Input, OnInit } from '@angular/core';

import { Equipamentos } from './equipamentos';
import { EquipamentosService } from './equipamentos.service';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  equipments: Equipamentos[] = []
  @Input() equipmentsSearch: string = ''

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {
    this.equipamentosService
      .getEquipments()
      .subscribe(equipment => this.equipments = equipment)
  }

}
