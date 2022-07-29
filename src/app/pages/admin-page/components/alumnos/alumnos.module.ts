import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerAlumnoComponent } from './ver-alumno/ver-alumno.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { CursosService } from 'src/app/services/cursos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    AlumnosService,
    CursosService
  ],
  declarations: [
    AlumnosComponent,
    VerAlumnoComponent,
    EditarAlumnoComponent,
    NuevoAlumnoComponent,
    ListarAlumnosComponent
  ],
})
export class AlumnosModule { }
