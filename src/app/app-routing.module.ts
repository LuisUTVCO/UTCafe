import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { SobreNosotrosComponent } from './shared/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { PerfilAdminComponent } from './components/admin-components/perfil-admin/perfil-admin.component';
import { PerfilClienteComponent } from './components/cliente-components/perfil-cliente/perfil-cliente.component';
import { AlmuerzosComponent } from './components/cliente-components/almuerzos/almuerzos.component';
import { BebidasComponent } from './components/cliente-components/bebidas/bebidas.component';
import { PostresComponent } from './components/cliente-components/postres/postres.component';
import { CompraProductoComponent } from './components/cliente-components/compra-producto/compra-producto.component';
import { MetodoPagoComponent } from './components/cliente-components/metodo-pago/metodo-pago.component';

const routes: Routes = [

  //Rutas para el usuario 
  { path: '', redirectTo: '/home-cliente', pathMatch: 'full' },

  // Carpeta Components (components de vistas de usuario cliente - admin)
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'home-cliente', component: HomeClienteComponent },


  //Carpeta Admin-components (components de vista de usuario admin)
  { path: 'perfil-admin', component: PerfilAdminComponent },

  { path: 'almuerzos', component: AlmuerzosComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'postres', component: PostresComponent },

  { path: 'compra-producto', component: CompraProductoComponent },
  { path: 'metodo-pago', component: MetodoPagoComponent },


  //Carpeta Admin-components (components de vista de usuario admin)
  { path: 'perfil-cliente', component: PerfilClienteComponent },


  // Carpeta Shared (components de información o error)
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pagina-error', component: PaginaErrorComponent },

  // Redirigir a Pagina-error en caso de no existir la ruta ingresada
  { path: '**', redirectTo: '/pagina-error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
