import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FiltrarEquipamentos } from './filtrar-equipamentos.pipe';
import { EquipamentosComponent } from './equipamentos.component';

@NgModule({
  declarations: [
    EquipamentosComponent,
    FiltrarEquipamentos
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EquipamentosComponent
  ]
})
export class EquipamentosModule { }
