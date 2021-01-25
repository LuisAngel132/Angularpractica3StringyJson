import { Component, OnInit } from '@angular/core';

import{Router,ActivatedRoute} from '@angular/router'
import{Persona} from '../../../Modelos/persona'
@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  persona:Persona[]=[{
    nombre:"Angel",
    apellidos:"Zaragoza",
    edad:0

  },
  {
    nombre:"cristian",
    apellidos:"Hernandez",
    edad:0

  },
  {
    nombre:"Francis",
    apellidos:"Esquivel",
    edad:0

  },
  {
    nombre:"Pedro",
    apellidos:"Garcia",
    edad:0

  },
  
];
persona2=JSON.stringify(this.persona) 
  ngOnInit(): void {
    
    
   
  }
  ruta4(){
    this.router.navigate(['4',this.persona2]);
}
}
