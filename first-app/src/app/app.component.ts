import { Component } from '@angular/core';
import { MyService } from './service/my-service';

@Component({
  selector: '.root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MyService]
})
export class AppComponent {
  title = 'app';
}
