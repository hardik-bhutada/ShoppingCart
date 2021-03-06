import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , filterString : string , propName : string): any {
    
    if(value.length === 0 || filterString === "")
    {
      return value;
    }

    // let resultArrayAll = [];
    // if (filterString === 'all') {
    //   for (const item of value) {
    //       resultArrayAll.push(item);
    //   }
    //   return resultArrayAll;
    // }

    const resultArray = [];
    for(const item of value)
    {
      if(item[propName] === filterString)
      {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
