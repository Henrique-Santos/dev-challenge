import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PedidosVendaModule } from './pedidos-venda/pedidos-venda.module';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './logo/logo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PedidosVendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
