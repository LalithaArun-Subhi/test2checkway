import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  private value!: string;
  transform(val:string,...args:string[]): string {
    console.log("Pipe notation----");
    if(args[0] == "arun")
      return val.concat(args[0]);

    else
      return val;
  }

}
