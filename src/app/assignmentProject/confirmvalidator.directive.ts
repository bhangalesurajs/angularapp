import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmvalidatorDirective,
    multi: true
  }]
})
export class ConfirmvalidatorDirective implements Validator {

  @Input() appConfirmvalidator:  string;
  validate(control:AbstractControl):{[key:string]:any} |null{
    const controlToCompare = control.parent.get(this.appConfirmvalidator);
    if(controlToCompare && controlToCompare.value !== control.value){
      return{ 'notEqual': true};
    } 
    return null;

  }

  constructor() { 
    
  }

}
