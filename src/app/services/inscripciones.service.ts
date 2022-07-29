import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Alumno } from '../interfaces/alumno';
import { Inscripcion } from '../interfaces/inscripcion';
import { AlumnosService } from './alumnos.service';
import { CursosService } from './cursos.service';

let inscripciones: Inscripcion[] = [
  {
    id: 1,
    idAlumno: 1,
    idCurso: 1,
    timestamp: 1659053045789
  },
  {
    id: 2,
    idAlumno: 2,
    idCurso: 2,
    timestamp: 1659053058839
  },
  {
    id: 5,
    idAlumno: 1,
    idCurso: 2,
    timestamp: 1659053045789
  },
  {
    id: 6,
    idAlumno: 2,
    idCurso: 3,
    timestamp: 1659053058839
  },
  {
    id: 7,
    idAlumno: 2,
    idCurso: 4,
    timestamp: 1659053066013
  },
];

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  baseUrl = environment.baseUrl;

  constructor(private alumnosService: AlumnosService, private cursosService: CursosService) {}

  getInscripciones() : Inscripcion[] {
    return inscripciones.map(inscripcion => {
      const date = new Date(inscripcion.timestamp || Date.now())
      return {
        ...inscripcion,
        alumnoInfo: this.alumnosService.getByInscriptionId(inscripcion.id),
        cursoInfo: this.cursosService.getByInscriptionId(inscripcion.id),
        formatedDate: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
      };
    })
  }

  getInscripcionById(id: number) : Inscripcion | undefined{
    return inscripciones.find(inscripcion => inscripcion.id === id);
  }

  // getCursoByInscripciones(inscripciones: number[]) : Inscripcion[] {
  //   return inscripciones.filter(curso => curso.inscripciones.find(inscripcion => inscripciones.includes(inscripcion)));
  // }

  // addInscripcion(alumno: Alumno) {
  //   const newInscripcion = {...inscripcion, id: Math.trunc(Math.random() * 10000)};
  //   inscripciones.push(newInscripcion); // esto en realidad es una llamada a la API
  //   return newInscripcion;
  // }

  // deleteInscripcion(id: number) {
  //   inscripciones = inscripciones.filter(inscripcion => inscripcion.id !== id)
  // }

  // updateInscripcion(inscripcionToEdit: Inscripcion) {
  //   inscripciones = inscripciones.map(inscripcion => inscripcion.id !== inscripcionToEdit.id ? inscripcion : inscripcionToEdit)
  // }
}
