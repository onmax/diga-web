import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { GradoComponent } from './components/grado/grado.component';
import { PersonalComponent } from './components/personal/personal.component';
import { MemoriaComponent } from './components/memoria/memoria.component';
import { PosgradoComponent } from './components/posgrado/posgrado.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { GruposIdiComponent } from './components/grupos-idi/grupos-idi.component';
import { InnovacionDocenteComponent } from './components/innovacion-docente/innovacion-docente.component';

import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'innovacion-docente', component: InnovacionDocenteComponent },
  { path: 'grupo-i-d+i', component: GruposIdiComponent },
  { path: 'posgrado', component: PosgradoComponent },
  { path: 'explorar', component: ExplorarComponent },
  { path: 'memoria', component: MemoriaComponent },
  { path: '', component: HomeComponent },
  { path: 'grado', component: GradoComponent },
  { path: 'direccion-profesorado', component: PersonalComponent },
  {
    path: 'grado/:quarter/:type/:subject/:group/:code',
    component: GradoComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
