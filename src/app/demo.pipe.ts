import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "demopipe"
})
export class DemoPipePipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    return value.toUpperCase();
  }
}
