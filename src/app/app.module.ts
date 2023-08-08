import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { SobreNosotrosComponent } from './shared/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    HomeClienteComponent,
    RegistroComponent,
    LoginComponent,
    PaginaErrorComponent,
    SobreNosotrosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
