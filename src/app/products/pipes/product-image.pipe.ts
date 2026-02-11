import { PipeTransform, Pipe } from "@angular/core";
import { environment } from "../../../environments/environment";

const baseUrl = environment.BaseUrl;

@Pipe({
  name: 'ProductImage'
})
 export class ProductImagePipe implements PipeTransform {
  transform(value: null | string | string[]): string {

    if (value === null) {
      return './assets/no-image.jpg'
    }

     if (typeof value === 'string') {
      return `${baseUrl}/files/product/${value}`;
    }

    const image = value.at(0);

    if (!image) {
      return './assets/no-image.jpg';
    }

    return `${baseUrl}/files/product/${image}`;

  }
 }
