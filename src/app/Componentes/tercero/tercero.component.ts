import { Component, OnInit } from '@angular/core';
import{Persona} from '../../../Modelos/persona'
import{Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {
  Persona:Persona={
    nombre:"",
    apellidos:"",
    edad:0

  }


  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Persona.nombre=this.route.snapshot.paramMap.get('nombre');
  }

    
}
