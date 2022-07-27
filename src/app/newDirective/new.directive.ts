import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective {

  constructor(private el:ElementRef,private render:Renderer2) {
    // el.nativeElement.style.backgroundColor='gray';
    render.setStyle(el.nativeElement,'background-color','red')
   }

}
