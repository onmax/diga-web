import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { GradoComponent } from './components/grado/grado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grado', component: GradoComponent },
  { path: 'grado/:quarter/:type/:subject/:group', component: GradoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
