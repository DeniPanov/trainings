function Logger(logString: string) {
    return function(originalConstructor: Function){
        console.log(logString);
        console.log(originalConstructor);
    }
}

function WithTempalte(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}>(constructor: T) {        
        return class extends constructor {
            constructor(...args: any[]) {
                super();
                const hookEl = document.getElementById(hookId); 

                if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        }
    }
}

//@Logger("LOGGING - PERSON")
@WithTempalte("<h1>My Person Object</h1>", "app")
class Person {
    name = "Deni";

    constructor() {
        console.log("Creating person objects...");
    }
}

const niki = new Person();

console.log(niki); 

function Log(target: any, propName: string | Symbol) {
    console.log("Property decorator!");
    console.log(target, propName);    
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accesor decorator!");
    console.log(target);  
    console.log(name);  
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator!");
    console.log(target);  
    console.log(name);  
    console.log(descriptor);  
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);  
    console.log(name);  
    console.log(position);  
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 36);

function AutoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;
}

class Printer {
    message = "This works!";

    @AutoBind    
    showMessage() {
        console.log(this.message);        
    }
}

const p = new Printer();

const btn = document.querySelector("button")!;
btn.addEventListener('click', p.showMessage);

//---------------------------

interface ValidatorConfig {
    [property: string] : {
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName:string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], "required"]
    }
}

function PositiveNumbers(target: any, propName:string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], "positive"]
    }
}   

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;

    for (const prop in objValidatorConfig) {
       for (const validator of objValidatorConfig[prop]) {
           if (validator === "required") {
               isValid = isValid && !!obj[prop];
           } else if (validator === "positive") {
            isValid = isValid && obj[prop] > 0;
           } else {
               return true;
           }
       }
    }

    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumbers
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = Number(priceEl.value);

    const createdCourse = new Course(title, price);
    console.log(createdCourse);

    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }
})