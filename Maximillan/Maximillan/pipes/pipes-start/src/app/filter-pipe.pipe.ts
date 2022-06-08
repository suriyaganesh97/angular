import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  new_array: string[]=[];
  transform(value: any,filterstring:string ) {
    if(value.length==0){
      return value;
    }
    
    for (let item of value){
      if(item.status===filterstring){
        this.new_array.push(item)

      }
    }
    return this.new_array;
  }

}
