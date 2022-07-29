import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.scss']
})
export class NuevoAlumnoComponent implements OnInit {

  public formulario: FormGroup;

  @Input() alumnoToEdit: Alumno;
  @Output() addAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      edad: ['', [Validators.required, Validators.min(10)]]
    })
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    for (let propName in changes) {
      if(propName === 'alumnoToEdit' && this.alumnoToEdit){
        this.formulario = this.fb.group({
          nombre: [this.alumnoToEdit.nombre, [Validators.required, Validators.minLength(4)]],
          apellido: [this.alumnoToEdit.apellido, [Validators.required, Validators.minLength(4)]],
          edad: [this.alumnoToEdit.edad, [Validators.required, Validators.min(10)]]
        })
      }
    }
  }

  agregarAlumno() {
    this.addAlumno.emit(this.formulario.value);
  }
}
