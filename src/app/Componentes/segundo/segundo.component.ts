import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'
import{Persona} from '../../../Modelos/persona'

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {
  Persona:Persona={
    nombre:"",
    apellidos:"",
    edad:0

  }
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  }
ruta3(nombre:String){
  this.router.navigate(['3',nombre]);
}

}
