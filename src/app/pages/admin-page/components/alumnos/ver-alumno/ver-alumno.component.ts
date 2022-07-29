import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { Curso } from 'src/app/interfaces/curso';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-ver-alumno',
  templateUrl: './ver-alumno.component.html',
  styleUrls: ['./ver-alumno.component.scss']
})
export class VerAlumnoComponent implements OnInit {
  public id: string;
  public alumno: Alumno | undefined;
  public cursos: Curso[];

  constructor(private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private router: Router) { }

  ngOnInit(): void {
    const paramRoute = this.route.snapshot.paramMap.get('id');
    if(paramRoute) this.id = paramRoute;
    this.alumno = this.alumnosService.getAlumnoById(Number.parseInt(this.id));
    console.log(this.alumno)
    if(this.alumno && this.alumno.inscripciones){
      this.cursos = this.cursosService.getCursoByInscripciones(this.alumno.inscripciones)
    }
  }

  volver(): void {
    this.router.navigate([`alumnos`]);
  }

}
