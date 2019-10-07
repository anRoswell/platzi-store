import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {

    date: Date = new Date();

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('Producto agregado al carrito');
        this.productClicked.emit(this.product.id);
    }
}
