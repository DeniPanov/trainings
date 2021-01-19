// const names: Array<string> = ["gosho", "pesho"];

// const promise:Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then( data => {
//     data.split(" ");
// });

function merge<T extends object, U extends object>(objA:T, objB:U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: "pesho", hobbies: ["Sports"]}, {age: 22});
const mergedObj2 = merge({name: "gosho", hobbies: ["Music"]}, {age: 29});
console.log(mergedObj.name);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value";
if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
}
    return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Deni");
textStorage.addItem("Panov");
textStorage.removeItem("Deni");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
};

function createCourseGoal (title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}