import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
@Directive({
  selector: '[appJquery]'
})
export class JqueryDirective {

  constructor(private elRef: ElementRef) { }
  


}
