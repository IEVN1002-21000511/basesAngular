import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf= true o false


  //Propiedades
  imageWidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true
  listFilter:string=''

  //Función

  muestImg():void{
this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"febrero 21 2022",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.yxqg01EsTpLP1IoF59T4NgHaE6?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":"marzo 23 2022",
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.IkM1K_U6YcMGIjb7iXKobQHaEo?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":"septiembre 24 2022",
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.L9REaQeu5ZIq5vKMpnMg-wHaFj?rs=1&pid=ImgDetMain.jpg"
    }
  ]

}
