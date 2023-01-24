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
  }
  Navegacion(){
    this.router.navigate([''])
      }
  Recuperar(){
    localStorage.nombre(this.nombre)
    localStorage.apellido(this.apellido)
    localStorage.direccion(this.direccion)
    localStorage.celular(this.celular)
    localStorage.edad(this.edad)
  }
}
