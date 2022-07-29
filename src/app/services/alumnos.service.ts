import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Alumno } from '../interfaces/alumno';

let alumnos: Alumno[] = [
  {
    id: 1,
    nombre: 'Rodrigo',
    apellido: 'Arancibia',
    edad: 30,
    inscripciones: [1, 5],
  },
  {
    id: 2,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    inscripciones: [2, 6, 7],
  },
];

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  baseUrl = environment.baseUrl;

  constructor() {}

  getAlumnos() : Alumno[] {
    return [...alumnos];
  }

  getAlumnoById(id: number) : Alumno | undefined{
    return alumnos.find(alumno => alumno.id === id);
  }

  getAlumnosByInscripciones(inscripciones: number[]) : Alumno[] {
    return alumnos.filter(alumno => alumno && alumno.inscripciones && alumno.inscripciones.find(inscripcion => inscripciones.includes(inscripcion)));
  }

  addAlumno(alumno: Alumno) {
    const newAlumno = {...alumno, id: Math.trunc(Math.random() * 10000)};
    alumnos.push(newAlumno); // esto en realidad es una llamada a la API
    return newAlumno;
  }

  deleteAlumno(id: number) {
    alumnos = alumnos.filter(alumno => alumno.id !== id)
  }

  updateAlumno(alumnoToEdit: Alumno) {
    alumnos = alumnos.map(alumno => alumno.id !== alumnoToEdit.id ? alumno : alumnoToEdit)
  }

  getByInscriptionId(inscripcionId: number){
    return alumnos.find(alumno => alumno.inscripciones && alumno.inscripciones.includes(inscripcionId))
  }
}
