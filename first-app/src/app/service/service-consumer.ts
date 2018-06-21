import { Component } from "@angular/core";
import { MyService } from "./my-service";

@Component({
    selector: 'service-user',
    template:``,
    providers: [MyService]
})
export class ServiceCosumer{
    constructor(private serv: MyService){}

    ngOnInit(){
        setInterval(()=>{
            console.log(this.serv.value)
        }, 2000)
    }
}