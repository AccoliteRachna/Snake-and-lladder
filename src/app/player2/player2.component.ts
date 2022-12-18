import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{
  num:number=0;
  start=0;
  constructor(private service:ServiceService){}
  cc:boolean=false;
  ngOnInit():void{
    this.service.bool.subscribe((val)=>{
      this.cc=val;
    })
  }
  position:number = this.service.p2position;
  diceroll(){
    this.num = Math.floor(Math.random() * 6) + 1;
    this.service.changemsg(false);
     this.cc=true;
  }
  display(){
    this.diceroll();
    if(this.num===6) this.start=1;
    if(this.start==1){
    let t = this.service.p2position+this.num;
    if(this.checkposition(t)){
    this.service.lastp2position=this.service.p2position;
    this.service.p2position = t;
    console.log("before position:",this.service.p2position);
    for(let i =0;i<this.service.ladder.length;i++)
    {
      if(this.service.ladder[i].from === this.service.p2position){
      this.service.p2position = this.service.ladder[i].to;
      }
    }
    for(let i =0;i<this.service.snakes.length;i++)
    {
      if(this.service.snakes[i].from === this.service.p2position){
      this.service.p2position = this.service.snakes[i].to;
      }
    }
    if(this.service.p2position===100) {
      alert("Player2 winner");
      window.location.reload();
    }
    console.log("after position:",this.service.p2position);
    }
    this.position = this.service.p2position;
  }
}
  checkposition(t:number){
      if(t>100) return false;
      if(t==100) {alert("Player2 winner");
      window.location.reload();
      return false;
      }
      return true;
    }
    check2(){
      return this.cc;
    }
   
}
