import {Product} from "./Product";

export interface IproductService{
    getById(id:number):Product;
    getAllProducts():Product[];
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;

}