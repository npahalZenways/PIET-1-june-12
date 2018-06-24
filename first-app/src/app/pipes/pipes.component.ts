import { Component, OnInit } from '@angular/core';
import { MyTrackService } from '../my-track-service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor(private track: MyTrackService){
    track.signal.subscribe(val => {
      console.log(val);
    })
  }

  today = new Date();

  myString = 'Hi this is a TEST string'

  num = 12345.98765;

  query;

  arr = [{
    name: 'Nitin',
    phone: 9876
  },{
    name: 'Amit',
    phone: 9876
  },{
    name: 'Jatin',
    phone: 9876
  },{
    name: 'Sachin',
    phone: 9876
  },{
    name: 'Rohan',
    phone: 9876
  }]

  ngOnInit() {
  }

}
