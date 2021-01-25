import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
ruta3(nombre:String){
  this.router.navigate(['3',nombre]);
}

}
