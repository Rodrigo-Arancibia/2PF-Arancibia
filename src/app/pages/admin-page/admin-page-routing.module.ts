import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminPageComponent } from './components/admin-page.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
// import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { VerAlumnoComponent } from './components/alumnos/ver-alumno/ver-alumno.component';
import { VerCursoComponent } from './components/cursos/ver-curso/ver-curso.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        component: AlumnosComponent,
        pathMatch: 'full',
      },
      {
        path: 'alumnos',
        component: AlumnosComponent,
        pathMatch: 'full',
      },
      {
        path: 'alumnos/:id',
        component: VerAlumnoComponent,
        pathMatch: 'full',
      },
      {
        path: 'cursos',
        component: CursosComponent,
        pathMatch: 'full',
      },
      {
        path: 'cursos/:id',
        component: VerCursoComponent,
        pathMatch: 'full',
      },
      {
        path: 'inscripciones',
        component: InscripcionesComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
