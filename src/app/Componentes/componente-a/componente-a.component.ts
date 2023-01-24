import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {
  constructor(private router: Router){}
  nombre:any
  apellido:any
  direccion:any
  celular:any
  edad:any
  ngOnInit(): void {
    

  }
  Navegacion2(){
    this.router.navigate(['web2'])
    localStorage.nombre(this.nombre)
    localStorage.apellido(this.apellido)
    localStorage.direccion(this.direccion)
    localStorage.celular(this.celular)
    localStorage.edad(this.edad)
      }
}
