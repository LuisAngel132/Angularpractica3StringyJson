import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute) { }
 
  
persona2
  ngOnInit(): void {
    this.persona2=this.route.snapshot.paramMap.get('persona2');

    
   
  }
  

}
