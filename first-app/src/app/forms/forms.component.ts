import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MyService } from '../service/my-service';
import { ActivatedRoute } from '@angular/router';
import { MyTrackService } from '../my-track-service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [],
  providers: [MyService]
})
export class FormsComponent implements OnInit {

  @ViewChild('myForm') formFromTemplate;

  user = {
    name: '',
    phone: '',
    email: ''
  }

  constructor(
    private ser: MyService,
    private ar:ActivatedRoute,
    private tr: MyTrackService
  ) { 
    tr.signal.subscribe(val => {
      console.log(val)
    })
  }

  onSubmit(form){
    console.log(form);
    this.formFromTemplate.form.markAsTouched();
    this.ser.value = 'bye'
  }

  ngOnInit() {
    // setInterval(()=>{
    //   console.log(this.ser.value);
    // }, 2000)

    // console.log(this.ar)

    // setTimeout(()=>{
    //   this.tr.sendSignal('asdfghj');
    // }, 5000)
  }

}
