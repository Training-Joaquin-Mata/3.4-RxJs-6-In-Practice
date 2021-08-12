// Classes, Properties and Inheritance

//<---------------------- Understanding Classes and Constructors
// Old way to declare it
// function Pizza(name: string){
//     this.name = name;
//     this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopíng(topping: string){
//         this.toppings.push(topping);
// }

// class Pizza{
//     name: string
//     toppings: string[] = [];
//     constructor(name: string){
//         this.name = name;
//     }
//     addTopping(topping: string){
//         this.toppings.push(topping);
//     }

// }


// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

// console.log(pizza);

//<---------------------- Public and private members

// class Pizza{
//    private toppings: string[] = [];

//    constructor(private name: string){ }

// //si se cambia a private esolo se puede acceder dentro de la clase
//     public addTopping(topping: string){
//         this.toppings.push(topping);
//     }

// }


// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

// console.log(pizza);

//<---------------------- ReadOnly members

// class Pizza{
//     public toppings: string[] = [];
//  //Si usas read Only solo puede ser inicializado desde la declaracion
//     constructor(readonly name: string){ }

//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
 
//  }
 
 
//  const pizza = new Pizza('Pepperoni');
 
//  pizza.addTopping('pepperoni');

//  console.log(pizza.name);

//  pizza.name = 'loquesea' 

//<---------------------- Setters and Getters

// class Sizes{
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes(){
//         return this.sizes;
//     }

// }

// const sizes = new Sizes(['small', 'medium']);
// //Invoke the getter
// console.log(sizes.availableSizes);

// //invoke the setter
// sizes.availableSizes = ['medium', 'large'];
// console.log(sizes.availableSizes);


// class Pizza{
//     public toppings: string[] = [];

//     constructor(readonly name: string){ }

//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
 
//  }
 

 
//  const pizza = new Pizza('Pepperoni');
 
//  pizza.addTopping('pepperoni');

//<---------------------- Classes and inheritance

// class Sizes{
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes(){
//         return this.sizes;
//     }

// }

// //para que herede una clase a otra hay que agregar el extends "nombre de la clase" y dentro del constructor el super();

// class Pizza extends Sizes{
//     public toppings: string[] = [];

//     constructor(readonly name: string, sizes:string[]){
//         super(sizes);
//      }

//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
 
//  }
 
//  const pizza = new Pizza('Pepperoni', ['medium', 'large']);

//  console.log(pizza.availableSizes);
 
//  pizza.addTopping('pepperoni');

//<---------------------- Abstract classes
//  abstract class Sizes{
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes(){
//         return this.sizes;
//     }

// }
// // las clases abstractas no pueden ser instanciadas como las clases normales
// // new Sizes (['small']);

// class Pizza extends Sizes{
//     public toppings: string[] = [];
//     constructor(readonly name: string, sizes:string[]){
//         super(sizes);
//      }
//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
//  }
 
//  const pizza = new Pizza('Pepperoni', ['medium', 'large']);

//  console.log(pizza.availableSizes);
 
//  pizza.addTopping('pepperoni');

//<---------------------- Protected Members and inheritance

// abstract class Sizes{
//     constructor(protected sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes(){
//         return this.sizes;
//     }

// }

// class Pizza extends Sizes{
//     public toppings: string[] = [];
//     constructor(readonly name: string, sizes:string[]){
//         super(sizes);
//      }

//     public updateSizes(size: string[]){
//         this.sizes= size;
//     }
//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
//  }
 
//  const pizza = new Pizza('Pepperoni', ['small', 'medium']);
 
//  pizza.addTopping('pepperoni');

//  console.log(pizza.availableSizes);


//  pizza.updateSizes(['large']);
//  console.log(pizza.availableSizes);

//<---------------------- Interface contracts with implements
// interface SizesInterface{
//     availableSizes: string[];
// }

// abstract class Sizes implements SizesInterface {
//     constructor(protected sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes(){
//         return this.sizes;
//     }

// }

// interface PizzaInterface extends SizesInterface{
//     readonly name: string;
//     toppings: string[];
//     updateSizes(sizes:string[]): void;
//     addTopping(topping: string): void;
// }

// class Pizza extends Sizes implements PizzaInterface{
//     public toppings: string[] = [];
//     constructor(readonly name: string, sizes:string[]){
//         super(sizes);
//      }

//     public updateSizes(size: string[]){
//         this.sizes= size;
//     }
//     public addTopping(topping: string){
//          this.toppings.push(topping);
//      }
//  }
 
//  const pizza = new Pizza('Pepperoni', ['small', 'medium']);
 
//  pizza.addTopping('pepperoni');

//  console.log(pizza.availableSizes);


//  pizza.updateSizes(['large']);
//  console.log(pizza.availableSizes);

//<---------------------- Static Properties and methods

class Coupon{
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number){
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));


//Curso completo