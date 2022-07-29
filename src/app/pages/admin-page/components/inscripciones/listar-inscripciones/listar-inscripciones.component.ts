import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { Curso } from 'src/app/interfaces/curso';
import { Inscripcion } from 'src/app/interfaces/inscripcion';

@Component({
  selector: 'app-listar-inscripciones',
  templateUrl: './listar-inscripciones.component.html',
  styleUrls: ['./listar-inscripciones.component.scss'],
})
export class ListarInscripcionesComponent implements OnInit {

  @Input() listaDeCursos: Curso[] = [];
  @Input() listaDeAlumnos: Alumno[] = [];
  @Input() listaDeInscripciones: Inscripcion[] = [];

  @Output() onClickInscripcion = new EventEmitter<Inscripcion>();
  @Output() onDeleteInscripcion = new EventEmitter<number>();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log('lista De Cursos ', this.listaDeCursos);
    console.log('lista De Alumnos ', this.listaDeAlumnos);
    console.log('lista De Inscripciones ', this.listaDeInscripciones);
  }

  editInscripcion(inscripcion: Inscripcion) {
    console.log("objeto inscripcion: " + inscripcion)
    this.onClickInscripcion.emit(inscripcion);
  }

  delete(id: number): void {
    this.onDeleteInscripcion.emit(id);
  }

  show(id: number): void {
    this.router.navigate([`inscripciones/${id}`]);
  }
}
