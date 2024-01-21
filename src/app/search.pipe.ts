import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
//first argumnent should be the item which have to be transformed
//secnd arg- based on which the trasnformation have to be done
  transform(allEmployee: any[], searchKey: string): any[] {
   const result:any=[]
   if (!allEmployee || searchKey === "") {
    return allEmployee
    
   }
   else{
    allEmployee.forEach((item:any)=>{
   if (item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(item)

   }
    })
   }
   return result
  }

}
