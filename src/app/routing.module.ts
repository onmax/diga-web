import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { GradoComponent } from './components/grado/grado.component';
import { StaffComponent } from './components/staff/staff.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { GruposIdiComponent } from './grupos-idi/grupos-idi.component';
import { InnovacionDocenteComponent } from './innovacion-docente/innovacion-docente.component';

const routes: Routes = [
  { path: 'innovacion-docente', component: InnovacionDocenteComponent },
  { path: 'grupo-i-d+i', component: GruposIdiComponent },
  { path: 'posgrado', component: PosgradoComponent },
  { path: 'explorar', component: ExplorarComponent },
  { path: 'memoria', component: MemoriaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'grado', component: GradoComponent },
  { path: 'direccion-profesorado', component: StaffComponent },
  {
    path: 'grado/:quarter/:type/:subject/:group/:code',
    component: GradoComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
