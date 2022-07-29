import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { LoginPageComponent } from './components/login-page.component'
import { LoginFormModule } from 'src/app/login-form/login-form.module'

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
