import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './components/admin-page.component';
import { AlumnosModule } from './components/alumnos/alumnos.module';
import { CursosModule } from './components/cursos/cursos.module';
import { InscripcionesModule } from './components/inscripciones/inscripciones.module';
@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    RouterModule,
    AdminPageRoutingModule,
    SharedModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminPageModule {}
