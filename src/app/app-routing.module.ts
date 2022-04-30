import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './componets/list/list.component';
import { RegisterComponent } from './componets/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: "register", component: RegisterComponent },
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
