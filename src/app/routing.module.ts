import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { GradoComponent } from './components/grado/grado.component';
import { SubjectComponent } from './components/subject/subject.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grado', component: GradoComponent },
  { path: 'direccion-profesorado', component: StaffComponent },
  { path: 'grado/:quarter/:type/:subject/:group', component: SubjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
