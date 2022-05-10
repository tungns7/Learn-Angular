import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as prod from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: prod.Product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = prod.products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: prod.Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
