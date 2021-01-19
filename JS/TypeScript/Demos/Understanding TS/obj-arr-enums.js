"use strict";
const person = {
    name: "myName",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"]
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
person.role.push("Admin");
// person.role.push[1](2);
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=obj-arr-enums.js.map