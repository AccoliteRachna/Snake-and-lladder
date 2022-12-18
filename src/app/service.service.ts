import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
bool=new EventEmitter<boolean>();
changemsg(data: boolean)
{
  this.bool.emit(data);
}
  lastp1position:number;
  lastp2position:number;
  p1position:number;
  p2position:number;
  constructor(){
    this.p1position = 0;
    this.p2position = 0;
    this.lastp1position=0;
    this.lastp2position=0;
  }
  snakes:any[] = [
    {id:1,from:15,to:3},
    {id:2,from:27,to:7},
    {id:3,from:50,to:36},
    {id:4,from:77,to:45},
    {id:5,from:98,to:13},
  ]
  ladder:any[] = [
    {id:1,from:4,to:33},
    {id:2,from:11,to:47},
    {id:3,from:30,to:67},
    {id:4,from:61,to:99},
    {id:5,from:46,to:88},
  ]
  setp1position(p1:number){
    this.p1position=p1;
  }
  setp2position(p2:number){
    this.p2position=p2;
  }
  getp1position(){
    return this.p1position;
  }
  getp2position(){
    return this.p2position;
  }
  // show=new Subject<boolean>();
  //show = true;
  // constructor() { }
  // setshow(){
  //   this.show.next(!this.show);
  // }
}
