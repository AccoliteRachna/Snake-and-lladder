
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
  num:number=0;
  start=0;
  cc:boolean=false;
  ngOnInit():void{
    this.service.bool.subscribe((val)=>{
      this.cc=val;
    })
  }
  //disp=true;
  //disp = this.service.show;
   position = this.service.p1position;
  constructor(private service:ServiceService){}
  diceroll(){
    this.num = Math.floor(Math.random() * 6) + 1;
    this.service.changemsg(false);
     this.cc=true;
  }
  display(){
    this.diceroll();
    if(this.num===6) this.start=1;
    if(this.start==1){
    let t = this.service.p1position+this.num;
    if(this.checkposition(t)){
    this.service.lastp1position=this.service.p1position;
    this.service.p1position = t;
    console.log("before position:",this.service.lastp1position);
    for(let i =0;i<this.service.ladder.length;i++)
    {
      if(this.service.ladder[i].from === this.service.p1position){
      this.service.p1position = this.service.ladder[i].to;
      }
    }
    for(let i =0;i<this.service.snakes.length;i++)
    {
      if(this.service.snakes[i].from === this.service.p1position){
      this.service.p1position = this.service.snakes[i].to;
      }
    }
    if(this.service.p1position===100){
      alert("Player1 winner");
      window.location.reload();
    } 
    console.log("after position:",this.service.p1position);
    }
    this.position = this.service.p1position;
  }
  }
    checkposition(t:number){
      if(t>100) return false;
      if(t==100) {
        alert("Player1 winner");
        window.location.reload();
        return false;
      }
      return true;
    }
    check(){
      return this.cc;
    }
}
