import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  @ViewChild('closeModal') closeModal: any;
  @ViewChild('editarAlumnoModal') editarAlumnoModal: any;

  showModal: boolean = false;
  infoAlumno: Alumno = { nombre: '', apellido: '', edad: 0, id: 0 };

  alumnos: Alumno[] = [];
  alumnoToEdit: Alumno;

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAlumnos();
  }

  newAlumno(alumno: Alumno) {
    if(this.alumnoToEdit && this.alumnoToEdit.id){
      this.alumnosService.updateAlumno({...alumno, id: this.alumnoToEdit.id});
      this.alumnos = this.alumnos.map(a => a.id !== this.alumnoToEdit.id ? a : {...alumno, id: this.alumnoToEdit.id});
    } else {
      const newAlumno = this.alumnosService.addAlumno(alumno);
      this.alumnos.push(newAlumno);
    }
  }

  setearAlumnoAModificar(alumno: Alumno) {
    this.alumnoToEdit = alumno;
  }

  modificarAlumno(alumno: Alumno) {
    this.alumnos[alumno.id] = alumno;
    this.closeModal.nativeElement.click();
  }

  deleteAlumno(id: number) {
    this.alumnosService.deleteAlumno(id);
    this.alumnos = this.alumnos.filter((alumno) => alumno.id !== id);
  }
}
