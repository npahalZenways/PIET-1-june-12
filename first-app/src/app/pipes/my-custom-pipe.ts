import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform{
    transform(value, option){
        if(option){
            let filtered = value.filter(function(el){
                return el.name.toLowerCase().indexOf(option.toLowerCase()) != -1;
            })
            return filtered;
        } else{
            return value;
        }
    }
}