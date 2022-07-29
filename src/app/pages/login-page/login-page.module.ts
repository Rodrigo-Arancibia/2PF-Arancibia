import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { LoginPageRoutingModule } from './login-page-routing.module'
// import { LoginFormComponent } from '../../login-form/components/login-form/login-form.component';
import { LoginFormModule } from 'src/app/login-form/login-form.module';
import { LoginPageComponent } from './components/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    // LoginPageRoutingModule,
    LoginFormModule
  ],
})
export class LoginPageModule {}
