import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MyService } from '../service/my-service';

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

  constructor(private ser: MyService) { }

  onSubmit(form){
    console.log(form);
    this.formFromTemplate.form.markAsTouched();
    this.ser.value = 'bye'
  }

  ngOnInit() {
    setInterval(()=>{
      console.log(this.ser.value);
    }, 2000)
  }

}
