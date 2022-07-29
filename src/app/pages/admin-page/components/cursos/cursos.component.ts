import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  @ViewChild('closeModal') closeModal: any;
  @ViewChild('editarCursoModal') editarCursoModal: any;

  showModal: boolean = false;
  infoCurso: Curso = { nombre: '', inscripciones: [], id: 0 };

  cursos: Curso[] = [];
  cursoToEdit: Curso | null;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  newCurso(curso: Curso) {
    if(this.cursoToEdit && this.cursoToEdit.id){
      const idToEdit = this.cursoToEdit.id;
      this.cursosService.updateCurso({...curso, id: this.cursoToEdit.id});
      this.cursos = this.cursos.map(a => a.id !== idToEdit ? a : {...curso, id: idToEdit});
    } else {
      const newAlumno = this.cursosService.addCurso(curso);
      this.cursos.push(newAlumno);
    }
  }

  setearCursoAModificar(curso: Curso) {
    this.cursoToEdit = curso;
  }

  modificarCurso(curso: Curso) {
    this.cursos[curso.id] = curso;
    this.closeModal.nativeElement.click();
  }

  deleteCurso(id: number) {
    this.cursos = this.cursos.filter((curso) => curso.id !== id);
  }

}
