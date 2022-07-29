import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.scss']
})
export class NuevoCursoComponent implements OnInit {

  public formulario: FormGroup;

  @Input() cursoToEdit: Curso;
  @Output() addCurso = new EventEmitter<Curso>();
  @Output() salir = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      inscripciones: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if(propName === 'cursoToEdit'){
        if(this.cursoToEdit){
          this.formulario = this.fb.group({
            nombre: [this.cursoToEdit.nombre, [Validators.required, Validators.minLength(4)]],
            inscripciones: [this.cursoToEdit.inscripciones, [Validators.required]]
          })
        }else{
          this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(4)]],
            inscripciones: ['', [Validators.required]]
          })
        }
      }
    }
  }

  agregarCurso() {
    this.addCurso.emit(this.formulario.value);
  }

}
