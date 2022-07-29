import { Component, OnInit, ViewChild } from '@angular/core';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { InscripcionesService } from 'src/app/services/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit {
  @ViewChild('closeModal') closeModal: any;
  @ViewChild('editarInscripcionModal') editarInscripcionModal: any;

  showModal: boolean = false;
  infoInscripcion: Inscripcion = { idAlumno: 0, idCurso: 0, timestamp: Date.now(), id: 0 };

  inscripciones: Inscripcion[] = [];
  inscripcionToEdit: Inscripcion;

  constructor(private inscripcionesService: InscripcionesService) {}

  ngOnInit(): void {
    this.inscripciones = this.inscripcionesService.getInscripciones();
    console.log(this.inscripciones)
  }

  newInscripcion(inscripcion: Inscripcion) {
    if(this.inscripcionToEdit && this.inscripcionToEdit.id){
      // this.inscripcionesService.updateInscripcion({...inscripcion, id: this.inscripcionToEdit.id});
      this.inscripciones = this.inscripciones.map(a => a.id !== this.inscripcionToEdit.id ? a : {...inscripcion, id: this.inscripcionToEdit.id});
    } else {
      // const newInscripcion = this.inscripcionesService.addInscripcion(inscripcion);
      // this.inscripciones.push(newInscripcion);
    }
  }

  setearInscripcionAModificar(inscripcion: Inscripcion) {
    this.inscripcionToEdit = inscripcion;
  }

  modificarInscripcion(inscripcion: Inscripcion) {
    this.inscripciones[inscripcion.id] = inscripcion;
    this.closeModal.nativeElement.click();
  }

  deleteInscripcion(id: number) {
    // this.inscripcionesService.deleteInscripcion(id);
    this.inscripciones = this.inscripciones.filter((inscripcion) => inscripcion.id !== id);
  }
}
