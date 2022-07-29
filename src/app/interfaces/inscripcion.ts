import { Curso } from "./curso"

export interface Inscripcion {
  id: number,
  idAlumno: number,
  idCurso: number,
  alumnoInfo?: Object,
  cursoInfo?: Object,
  timestamp?: number,
  formatedDate?:string
}
