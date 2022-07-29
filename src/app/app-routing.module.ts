import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageModule } from './pages/admin-page/admin-page.module';
import { LoginPageComponent } from './pages/login-page/components/login-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => AdminPageModule,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
