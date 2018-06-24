import { Component } from '@angular/core';
import { MyService } from './service/my-service';
import { Router } from '@angular/router';

@Component({
  selector: '.root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MyService]
})
export class AppComponent {
  title = 'app';

  constructor(private r: Router){

  }

  // toAdmin(){
  //   setTimeout(()=>{
  //     this.r.navigate(['admin'])
  //   }, 3000)
  // }
}
