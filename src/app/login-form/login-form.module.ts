import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
