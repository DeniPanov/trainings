"use strict";
// const names: Array<string> = ["gosho", "pesho"];
// const promise:Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then( data => {
//     data.split(" ");
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "pesho", hobbies: ["Sports"] }, { age: 22 });
const mergedObj2 = merge({ name: "gosho", hobbies: ["Music"] }, { age: 29 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Deni");
textStorage.addItem("Panov");
textStorage.removeItem("Deni");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
;
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=generics.js.map