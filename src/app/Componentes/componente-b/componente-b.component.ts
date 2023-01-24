import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {
  nombre:any
  apellido:any
  direccion:any
  celular:any
  edad:any
  constructor(private router: Router){}

  ngOnInit(): void {
    this.nombre;
    this.apellido;
    this.direccion;
    this.celular;
    this.edad;
  }
  Navegacion(){
    this.router.navigate([''])
      }
  Recuperar(){
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('direccion',this.direccion)
    localStorage.setItem('celular',this.celular)
    localStorage.setItem('edad',this.edad)
  }
}
