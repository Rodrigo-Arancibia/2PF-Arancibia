import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss'],
})
export class ListarAlumnosComponent implements OnInit {

  @Input() listaDeAlumnos: Alumno[] = [];
  @Output() onClickAlumno = new EventEmitter<Alumno>();
  @Output() onDeleteAlumno = new EventEmitter<number>();

  ageFilterMin:number = 0;
  ageFilterMax:number = 100;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log('log', this.listaDeAlumnos);
  }

    editAlumno(alumno: Alumno){
    console.log("objeto alumno:" + alumno)
    this.onClickAlumno.emit(alumno);
  }

  setAgeFilter(min: number, max: number){
    this.ageFilterMin = min;
    this.ageFilterMax = max;
  }

  delete(id: number): void {
    this.onDeleteAlumno.emit(id);
  }

  show(id: number): void {
    this.router.navigate([`alumnos/${id}`]);
  }
}
