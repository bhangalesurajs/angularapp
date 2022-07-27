import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'details'
})
export class DetailsPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender== "Male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }

}
