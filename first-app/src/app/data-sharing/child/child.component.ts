import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['receivedInput:name'],
  outputs: ['myoutput']
})
export class ChildComponent implements OnInit {

  // @Input('name') receivedInput;
  receivedInput;

  // custom event
  myoutput = new EventEmitter();

  // @Output() myoutput = new EventEmitter();

  // myoutput.emit() to trigger this event
  constructor() { }

  ngOnInit() {
  }

}
