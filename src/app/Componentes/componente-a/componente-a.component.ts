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
    this.nombre;
    this.apellido;
    this.direccion;
    this.celular;
    this.edad;

  }
  Navegacion2(){
    this.router.navigate(['web2'])
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('direccion',this.direccion)
    localStorage.setItem('celular',this.celular)
    localStorage.setItem('edad',this.edad)
      }
}
