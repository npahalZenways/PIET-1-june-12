import { Directive, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[dynamic]',
    // host:{
    //     '(click)':'onclick()',
    //     '(mouseenter)': 'changeLink()'
    // }
})
export class MyDirective{
    constructor(
        private el: ElementRef
    ){
        console.log(this.el)
    }

    @HostBinding('href') customHref;

    @HostListener('click') onclick(){
        this.el.nativeElement.style.backgroundColor = 'red';
        this.el.nativeElement.style.color = 'white';
    }

    @HostListener('mouseenter') changeLink(){
        this.customHref = 'https://www.google.com';
    }

}