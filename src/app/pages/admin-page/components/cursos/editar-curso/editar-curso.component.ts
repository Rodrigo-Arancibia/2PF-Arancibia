import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {

  @Input() curso: Curso | undefined;

  @Output() editCurso = new EventEmitter<Curso>();

  public formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      inscripciones: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }

  editarCurso(curso: Curso) {
    if (this.formulario.get('nombre')?.errors === null && this.formulario.get('inscripciones')?.errors === null) {
      let nuevoCurso = this.formulario.value;
      nuevoCurso.id = this.curso?.id;
      this.editCurso.emit(nuevoCurso);
      this.formulario.reset();
    }
    else {
      console.log('Invalido');

    }
  }
}
