let obj = {
    property: false,
    method: function(value) {
        this.property = value;
        return "property value updated"
    },
}

console.log(obj.method(true)); //Output: Property value updated
console.log(obj.property); //output: true