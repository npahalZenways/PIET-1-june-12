import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MyTrackService{

    signal : BehaviorSubject<any> = new BehaviorSubject('abc');

    sendSignal(s){
        this.signal.next(s);
    }
}