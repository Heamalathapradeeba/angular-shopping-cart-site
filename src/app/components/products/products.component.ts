import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { product } from 'src/app/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
productArray:product[] = []
  constructor(private data: DataServiceService) { }

  ngOnInit(): void {
      this.getData()
  }

  getData(){
     this.data.getProductData().subscribe((res) => {
      console.log(res, 'Response');
      this.productArray = res
     })
  }

  

}
