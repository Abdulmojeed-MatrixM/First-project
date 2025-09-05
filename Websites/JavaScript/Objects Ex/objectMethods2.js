let rectangle = {
    width: 25,
    height: 35,
    changeSize: function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
};
//Accessing the method
console.log("Before the size change: ", rectangle.width, rectangle.height); //Output: Hello, my name is AbduLLah and I'm 34 years Old.
rectangle.changeSize(45, 65);
console.log("After size changed: ", rectangle.width, rectangle.height);