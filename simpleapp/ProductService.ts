import {IproductService} from "./IproductService";
import {Product} from "./Product";
import {DataSource} from "./DataSource";

export class ProductService implements IproductService {

    private data: DataSource;
    private products: Array<Product>;

    constructor() {
        this.data = new DataSource();
        this.products = new Array<Product>();
        this.data.getProducts().forEach(p => this.products.push(p));

    }

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
    }

    getAllProducts(): Product[] {
        console.log(this.products)
        return this.products;
    }

    saveProduct(product:Product): void {
        if(product.id==0|| product.id==null){
            product.id=this.generateId();
            this.products.push(product);
        }else{
            let index;
            for (let i=0;i<this.products.length;i++){
                if(this.products[i].id===product.id){
                    index=i;
                }
            }
            this.products.splice(index,1,product);
        }
    }

    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
    }

    private generateId():number{
        let key=1;
        while (this.getById(key)!=null){
            key++;
        }
        return key;
    }

}