import { Alumno } from "./alumno";

export interface Curso {
  id: number,
  nombre: string,
  inscripciones?: number[],
}
