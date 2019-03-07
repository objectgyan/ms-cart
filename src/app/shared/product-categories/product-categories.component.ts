import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/productcategory.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  isCollapsed = true;
  categories : any;
  constructor(private productCategoryService : ProductCategoryService) { }

  ngOnInit() {
    this.setCategories();
  }

  setCategories(){
    this.productCategoryService.getAllCategories().
    subscribe( data => {
      this.categories = data;
    });
  }
}
