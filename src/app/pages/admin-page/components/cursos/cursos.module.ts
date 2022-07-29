import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from 'src/app/services/cursos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { VerCursoComponent } from './ver-curso/ver-curso.component';


@NgModule({
  declarations: [
    CursosComponent,
    NuevoCursoComponent,
    ListarCursosComponent,
    VerCursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [CursosService],
})
export class CursosModule {}
