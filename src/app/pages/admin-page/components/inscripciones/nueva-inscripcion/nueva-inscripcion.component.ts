import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';
import { Inscripcion } from '../../../../../interfaces/inscripcion';

@Component({
  selector: 'app-nueva-inscripcion',
  templateUrl: './nueva-inscripcion.component.html',
  styleUrls: ['./nueva-inscripcion.component.scss']
})
export class NuevaInscripcionComponent implements OnInit {

  public formulario: FormGroup;

  @Input() inscripcionToEdit: Inscripcion;
  @Output() addInscripcion = new EventEmitter<Inscripcion>();
  @Output() salir = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      idAlumno: ['', [Validators.required]],
      idCurso: ['', [Validators.required]],
      date: ['']
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if(propName === 'inscripcionToEdit'){
        if(this.inscripcionToEdit){
          this.formulario = this.fb.group({
            idAlumno: [this.inscripcionToEdit.idAlumno, [Validators.required]],
            idCurso: [this.inscripcionToEdit.idCurso, [Validators.required]],
            date: ['']

          })
        }else{
          this.fb.group({
            idAlumno: ['', [Validators.required]],
            idCurso: ['', [Validators.required]],
            date: ['']
          })
        }
      }
    }
  }

  agregarInscripcion() {
    this.addInscripcion.emit(this.formulario.value);
  }

}
