import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing
import { RoutingModule } from './routing.module';

// translation
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GradoComponent } from './components/grado/grado.component';
import { SubjectComponent } from './components/subject/subject.component';
import { StaffComponent } from './components/staff/staff.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { GruposIdiComponent } from './grupos-idi/grupos-idi.component';
import { InnovacionDocenteComponent } from './innovacion-docente/innovacion-docente.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    GradoComponent,
    SubjectComponent,
    StaffComponent,
    MemoriaComponent,
    PosgradoComponent,
    ExplorarComponent,
    GruposIdiComponent,
    InnovacionDocenteComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [SubjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
