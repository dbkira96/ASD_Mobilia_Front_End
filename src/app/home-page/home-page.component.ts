import { Identifiers } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   Products: Array<Product> = [];
   str = "hello"
   
   

  constructor() { }

  ngOnInit(): void {

    var product1 = new Product(1,"sedia","arredamento","cucina","A-2",20)
    var product2 = new Product(2,"tavolo","arredamento","cucina","B-4",30)
    var product3 = new Product(3,"vaso","arredamento","salotto","C-8",40)
    this.Products = [product1,product2,product3];
    
    //this.getProductByName(products,"tavolo");
    //this.getProductsByCategoryAndSubCategory(products,"arredamento","cucina");

    //creo lista di prodotti sulla pagina html

    this.str = this.generateProductsList(this.Products);
    document.getElementById("divProduct")?.insertAdjacentHTML("afterend",this.str);
    
  }


  generateProductsList(products:Array<Product>):string{
    var str = '<ul>'
    for(var i = 0;i<products.length;i++)
    {
      str+='<li>' + products[i].name + '</li>';
      str+='<li>' + products[i].quantity + '</li>';
      str+='<li>' + products[i].category + '</li>';
      str+='<li>' + products[i].subcategory + '</li>';
      str+='<li>'+'</li>';
    }
    str+= '</ul>';
    return str;

  }

  getAllProducts(products:Array<Product>): void{
    for(var i = 0;i<products.length;i++)
    {
      console.log(products[i].id);
      console.log(products[i].name);
      console.log(products[i].category);
      console.log(products[i].subcategory);
      console.log(products[i].quantity);
    }
  }

  getProductByName(products:Array<Product>,name:String): void{
    for(var i = 0;i<products.length;i++)
    {
      if(products[i].name == name)
      {
      console.log(products[i].quantity);
      console.log(products[i].scaffale);
      }
    }
  }

  getProductsByCategoryAndSubCategory(products:Array<Product>,category:String,subcategory:String): void{
    for(var i = 0;i<products.length;i++)
    {
      if(products[i].category == category && products[i].subcategory == subcategory)
      {
      console.log(products[i].name);
      }
    }
  }
  
  
 }

 class Product {
  id:number
  name: string; 
  category: string; 
  subcategory: string;
  scaffale:string;
  quantity: number; 

  
  // Default constructor will be called by mapper
  constructor(id:number,name:string,category:string,subcategory:string,scaffale:string,quantity:number){
    this.id = id;
    this.name =name; 
    this.category =category; 
    this.subcategory = subcategory; 
    this.scaffale=scaffale;
    this.quantity = quantity; 
  }

  setName(name:string){
    this.name = name
  }
  setScaffale(scaffale:string){
    this.scaffale = scaffale
  }
  setQuantity(quantity:number){
    this.quantity = quantity
  }


  

 }
