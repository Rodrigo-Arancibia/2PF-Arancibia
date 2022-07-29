import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss'],
})
export class ListarCursosComponent implements OnInit {

  @Input() listaDeCursos: Curso[] = [];
  @Output() onClickCurso = new EventEmitter<Curso>();
  @Output() onDeleteCurso = new EventEmitter<number>();

  ageFilterMin:number = 0;
  ageFilterMax:number = 100;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log('log', this.listaDeCursos);
  }

    editCurso(curso: Curso){
    console.log("objeto curso:" + curso)
    this.onClickCurso.emit(curso);
  }

  setAgeFilter(min: number, max: number){
    this.ageFilterMin = min;
    this.ageFilterMax = max;
  }

  delete(id: number): void {
    this.onDeleteCurso.emit(id);
  }

  show(id: number): void {
    this.router.navigate([`cursos/${id}`]);
  }
}
