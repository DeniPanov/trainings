const person = {
    name: "myName",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"]
};

enum Role {
ADMIN = 5, READ_ONLY, AUTHOR
};

person.role.push("Admin");
// person.role.push[1](2);

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}