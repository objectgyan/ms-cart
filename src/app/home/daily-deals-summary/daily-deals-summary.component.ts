import { OnInit, Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-daily-deals-summary',
  templateUrl: './daily-deals-summary.component.html',
  styleUrls: ['./daily-deals-summary.component.css']
})
export class DailyDealsSummaryComponent implements OnInit {

  productList : any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().
    subscribe( data => {
      this.productList = data.filter(c=>c.price>= new Float32Array(Math.random())).slice(0,6);
      console.log(this.productList);
    });
  }
}
