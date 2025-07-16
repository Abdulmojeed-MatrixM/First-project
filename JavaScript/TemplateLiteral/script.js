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

// create a new user obect
const newHTML = `
    
    <h1>Your email address is abdullah@example.com</h1>
    <h1>Hello ${userObject.name}</h1>
    <h1>Your Age is ${userObject.age}</h1>
    <h1>Your Email is ${userObject.email}</h1>
`;

// Display the new HTML content
document.body.innerHTML = newHTML;


const userBluey = new User ("Bluey", 25, "bluey@example.com");
console.log(userBluey);

const newHTML2 = `
    
    <h1>Hello ${userBluey.name}</h1>
    <h1>Your Age is ${userBluey.age}</h1>
    <h1>Your Email is ${userBluey.email}</h1>
`;

// Display the new HTML content
document.body.innerHTML = newHTML2;