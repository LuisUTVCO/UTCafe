import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AgregarAlmuerzoComponent } from './agregar-almuerzo/agregar-almuerzo.component';



@NgModule({
  declarations: [
    PerfilAdminComponent,
    AgregarAlmuerzoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminComponentsModule { }
