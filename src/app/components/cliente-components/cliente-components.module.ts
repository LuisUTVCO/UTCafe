import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { AlmuerzosComponent } from './almuerzos/almuerzos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { CompraProductoComponent } from './compra-producto/compra-producto.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PerfilClienteComponent,
    AlmuerzosComponent,
    BebidasComponent,
    PostresComponent,
    CompraProductoComponent,
    MetodoPagoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ClienteComponentsModule { }
