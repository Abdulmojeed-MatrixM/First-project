let person = {
    name: "AbduLLAh",
    age: 34,
    greet: function() {
        return (
            "Hello, my name is " + this.name + " and I'm " + this.age + "years old."
        );
    }
}
//Accessing the method
console.log(person.greet()); //Output: Hello, my name is AbduLLah and I'm 34 years Old.