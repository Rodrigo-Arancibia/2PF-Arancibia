import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { Curso } from 'src/app/interfaces/curso';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-ver-inscripcion',
  templateUrl: './ver-inscripcion.component.html',
  styleUrls: ['./ver-inscripcion.component.scss']
})
export class VerInscripcionComponent implements OnInit {
  public id: string;
  public alumnos: Alumno[];
  public curso: Curso | undefined;

  constructor(private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private router: Router) { }

  ngOnInit(): void {
    const paramRoute = this.route.snapshot.paramMap.get('id');
    if(paramRoute) this.id = paramRoute;
    if(this.id){
      this.curso = this.cursosService.getCursoById(Number.parseInt(this.id));
      if(this.curso && this.curso.inscripciones){
        this.alumnos = this.alumnosService.getAlumnosByInscripciones(this.curso.inscripciones);
      }
    }
  }

  volver(): void {
    this.router.navigate([`cursos`]);
  }
}
