import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Alumno } from '../interfaces/alumno';
import { Curso } from '../interfaces/curso';

let cursos: Curso[] = [
  {
    id: 1,
    nombre: 'javascript course',
    inscripciones: [1],
  },
  {
    id: 2,
    nombre: 'node course',
    inscripciones: [5, 2],
  },
  {
    id: 3,
    nombre: 'html course',
    inscripciones: [5, 6],
  },
  {
    id: 4,
    nombre: 'css course',
    inscripciones: [5, 7],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  baseUrl = environment.baseUrl;

  constructor() {}

  getCursos() : Curso[] {
    return [...cursos];
  }

  getCursoById(id: number) : Curso | undefined{
    return cursos.find(curso => curso.id === id);
  }

  getCursoByInscripciones(inscripciones: number[]) : Curso[] {
    return cursos.filter(curso => curso && curso.inscripciones && curso.inscripciones.find(inscripcion => inscripciones.includes(inscripcion)));
  }

  addCurso(curso: Curso) {
    const newCurso = {...curso, id: Math.trunc(Math.random() * 10000)};
    cursos.push(newCurso); // esto en realidad es una llamada a la API
    return newCurso;
  }

  updateCurso(cursoToEdit: Curso) {
    cursos = cursos.map(curso => curso.id !== cursoToEdit.id ? curso : cursoToEdit)
  }

  getByInscriptionId(inscripcionId: number){
    return cursos.find(curso => curso.inscripciones && curso.inscripciones.includes(inscripcionId))
  }

}
