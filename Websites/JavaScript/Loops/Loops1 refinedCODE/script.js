const library = [
    "Lord of the Rings",
    "Catcher in the Rye",
    "Wuthering Height",
    "The Divine Comedy",
    "To kill a mocking bird"
];

let text = "";
for (let i = 0; i < library.length; i++) {
    text = textLibrary [i]; + "<br>";
}

document.getElementById("book-list").innerHTML = text;

