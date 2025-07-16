//User Class

class User {
    constructor (name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const userObject = new User ("Sponge Bob", 45, "spongebob@example.com");
console.log(userObject);

// 1. create a new user obect
const newHTML = `
    
    <h1>Your email address is abdullah@example.com</h1>
    <h1>Hello ${userObject.name}</h1>
    <h1>Your Age is ${userObject.age}</h1>
    <h1>Your Email is ${userObject.email}</h1>
`;

// Display the new HTML content
document.body.innerHTML = newHTML;

// 2. create a new user obect
const userBluey = new User ("Bluey", 25, "bluey@example.com");
console.log(userBluey);

const newHTML2 = `
    
    <h1>Hello ${userBluey.name}</h1>
    <h1>Your Age is ${userBluey.age}</h1>
    <h1>Your Email is ${userBluey.email}</h1>
`;

// Display the new HTML content
document.body.innerHTML = newHTML2;


// String Concatination 
const userString = new User ("AbdurRahman", 40, "a.rahman@example.com");
console.log(userString);

const newHTML3 = "<h1> Hello " + userString.name + "</h1>" + "</ br>" +
                "<h1> Your Age is " + userString.age + "</h1>" + "</ br>" +
                "<h1> Your Email is " + userString.email + "</h1>" + "</ br>";


// Display the new HTML content
document.body.innerHTML = newHTML3;