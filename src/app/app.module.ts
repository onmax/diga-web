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
import { personalComponent } from './components/personal/personal.component';
import { MemoriaComponent } from './components/memoria/memoria.component';
import { PosgradoComponent } from './components/posgrado/posgrado.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { GruposIdiComponent } from './components/grupos-idi/grupos-idi.component';
import { InnovacionDocenteComponent } from './components/innovacion-docente/innovacion-docente.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    GradoComponent,
    SubjectComponent,
    personalComponent,
    MemoriaComponent,
    PosgradoComponent,
    ExplorarComponent,
    GruposIdiComponent,
    InnovacionDocenteComponent,
    LoadingComponent,
    ErrorComponent
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
