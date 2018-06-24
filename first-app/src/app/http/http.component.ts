import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.post('http://localhost:9500/user/registration/login',
  {
    email: 'nitin.pahal@zenways.io',
    password: 'Qwerty@123'
  },{
    headers: {
      "token": 'sfghcjk'
    },
    params: {
      'search':''
    }
  }).subscribe(res =>{
    console.log(res)
  })
  }

}
