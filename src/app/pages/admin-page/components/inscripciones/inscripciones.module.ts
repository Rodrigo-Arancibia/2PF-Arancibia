import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InscripcionesComponent } from './inscripciones.component';
import { ListarInscripcionesComponent } from './listar-inscripciones/listar-inscripciones.component';
import { NuevaInscripcionComponent } from './nueva-inscripcion/nueva-inscripcion.component';
import { VerInscripcionComponent } from './ver-inscripcion/ver-inscripcion.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    ListarInscripcionesComponent,
    NuevaInscripcionComponent,
    VerInscripcionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InscripcionesModule { }
