import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './Componentes/primero/primero.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';
import { CuartoComponent } from './Componentes/cuarto/cuarto.component';
import { QuintoComponent } from './Componentes/quinto/quinto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
