import { Component,  OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  constructor(private service:ServiceService){}
  ngOnInit(): void {
  }
  fun1(){
    if(this.service.p1position!=this.service.lastp1position){
    if(this.service.p1position!=null && this.service.p1position!=0)
    (<HTMLInputElement>document.getElementById(this.service.p1position.toString())).style.backgroundColor="red";
    if(this.service.lastp1position!=null && this.service.lastp1position!=0)
    (<HTMLInputElement>document.getElementById(this.service.lastp1position.toString())).style.backgroundColor="pink";
    return true;
    }
    return false;
  }
  fun2(){
    if(this.service.p2position!=this.service.lastp2position){
    if(this.service.p2position!=null && this.service.p2position!=0)
    (<HTMLInputElement>document.getElementById(this.service.p2position.toString())).style.backgroundColor="green";
    if(this.service.lastp2position!=null && this.service.lastp2position!=0)
    (<HTMLInputElement>document.getElementById(this.service.lastp2position.toString())).style.backgroundColor="pink";
    return true;
    }
    return false;
  }
}
 
