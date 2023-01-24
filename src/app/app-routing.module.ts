import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './Componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './Componentes/componente-b/componente-b.component';


const routes: Routes = [
  {
    path: '', component: ComponenteAComponent
  },
  {
    path: 'web2', component: ComponenteBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
