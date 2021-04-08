import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaisComponent } from './materiais.component';
import { FiltrarMateriais } from './filtrar-materiais.pipe';

@NgModule({
  declarations: [
    MateriaisComponent,
    FiltrarMateriais
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MateriaisComponent
  ]
})
export class MateriaisModule { }
