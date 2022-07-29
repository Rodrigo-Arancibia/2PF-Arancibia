import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit{
  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      legajo: [null, [Validators.required]],
      contraseña: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
  }
  submit(){
    console.log("Datos confirmados!")
  }
}
