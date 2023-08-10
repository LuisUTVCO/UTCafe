import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { SobreNosotrosComponent } from './shared/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { PerfilAdminComponent } from './components/admin-components/perfil-admin/perfil-admin.component';
import { BebidasComponent } from './components/cliente-components/bebidas/bebidas.component';
import { StudentgGuard } from './guards/studentg.guard';
import { HomeComponent } from './components/cliente-components/home/home.component';
import { MenuComponent } from './components/cliente-components/menu/menu.component';
import { AlmuerzosComponent } from './components/cliente-components/almuerzos/almuerzos.component';
import { PostresComponent } from './components/cliente-components/postres/postres.component';
import { CompraProductoComponent } from './components/cliente-components/compra-producto/compra-producto.component';
import { MetodoPagoComponent } from './components/cliente-components/metodo-pago/metodo-pago.component';
import { PerfilClienteComponent } from './components/cliente-components/perfil-cliente/perfil-cliente.component';
import { AgregarProductoComponent } from './components/admin-components/agregar-producto/agregar-producto.component';

const routes: Routes = [

  //Rutas para el usuario 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Carpeta Components (components de vistas de usuario cliente - admin)
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },



  //Carpeta Admin-components (components de vista de usuario admin)
  { path: 'perfil-admin', component: PerfilAdminComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'bebidas', component: BebidasComponent },


  //Carpeta Cliente-components (components de vista de usuario Cliente)
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'almuerzos',
    component: AlmuerzosComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'bebidas',
    component: BebidasComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'postres',
    component: PostresComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'compra-producto',
    component: CompraProductoComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'metodo-pago',
    component: MetodoPagoComponent,
    canActivate: [StudentgGuard]
  },
  {
    path: 'perfil-cliente',
    component: PerfilClienteComponent,
    canActivate: [StudentgGuard]
  },

  // Carpeta Shared (components de información o error)
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pagina-error', component: PaginaErrorComponent },

  // Redirigir a Pagina-error en caso de no existir la ruta ingresada
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
