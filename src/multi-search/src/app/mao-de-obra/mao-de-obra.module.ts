import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaoDeObraComponent } from './mao-de-obra.component';
import { FiltrarMaoDeObra } from './filtrar-mao-de-obra.pipe';

@NgModule({
  declarations: [
    MaoDeObraComponent,
    FiltrarMaoDeObra
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MaoDeObraComponent
  ]
})
export class MaoDeObraModule { }
