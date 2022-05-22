import {ProductService} from "./ProductService";
import {Product} from "./Product";

let _productService=new  ProductService();

let result;
let result2;
result=_productService.getAllProducts();
result2=_productService.getById(1);
console.log("--------Result------")
console.log(result);
console.log("--------Result------")

console.log("--------Result2------")
console.log(result2)
console.log("--------Result2------")
let p = new Product();
p.name ='Asus GameBook';
p.price=24000;
p.category='LAptop';
_productService.saveProduct(p);
let result3=_productService.getAllProducts();
console.log("--------Result3------")
console.log(result3);
console.log("--------Result3------")
_productService.deleteProduct(result2)
let result4=_productService.getAllProducts();
console.log("--------Result4------")
console.log(result4)
console.log("--------Result4------")

let p2 = new Product();
p2.id=5;
p2.name ='Asus GameBook(Upadate_Xy)';
p2.price=24000;
p2.category='LAptop';
_productService.saveProduct(p2);
let result5=_productService.getAllProducts()
console.log(result5)


