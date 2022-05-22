import {Product} from "./Product";

export class DataSource{
    private products:Array<Product>;

    constructor() {
       this.products= new Array<Product>(
           new Product(1,"Lenovo GameBook","Laptop",18000),
           new Product(2,"Monster GameBook","Laptop",22000),
           new Product(3,"Casper GameBook","Laptop",17000),
           new Product(4,"MSI GameBook","Laptop",26000)
    );
    }

    getProducts(): Product[]{
        return this.products;

    }
}