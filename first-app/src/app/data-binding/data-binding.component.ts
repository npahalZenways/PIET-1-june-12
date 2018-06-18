import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent implements OnInit {

  name: string = 'ABCD';

  className = 'active';

  isTrue: boolean = true;

  printName(){
    return this.name;
  }

  print(...e){
    console.log(e)
  }
  constructor() { }

  ngOnInit() {
  }

}