import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeroComponent } from './Componentes/primero/primero.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';
import { CuartoComponent } from './Componentes/cuarto/cuarto.component';
import { QuintoComponent } from './Componentes/quinto/quinto.component';
const routes: Routes = [
  {path: '1',component:PrimeroComponent},
  {path: '2',component:SegundoComponent},
  {path: '3/:nombre',component:TerceroComponent},
  {path: '4/:persona2',component:CuartoComponent},
  {path: '**',component:QuintoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
