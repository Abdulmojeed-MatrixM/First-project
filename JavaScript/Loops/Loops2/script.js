// Array for Library books
const library = [
    "Lord of the Rings",
    "Catcher in the Rye",
    "Wuthering Height",
    "The Divine Comedy",
    "To kill a mocking bird"
];

function searchBook() {
    let searchInput = document.getElementById("searchInput").value.lowerCase();
    let searchResult =document.getElementById("searchResult");
    searchResult.innerHTML = "";
}

let foundBooks = [];

for (let i = 0; i < library.length; i++) {
    if (library[i].toLowerCase().includes(searchInput)){
        foundBooks.push(library[i]);
    }
}

if (foundBooks.length > 0) {
    for (let i = 0; i < foundBooks.length; i++) {
        let bookInfo = document.createElement("p");
        bookInfo.textContent = foundBooks[i];
        searchResult.appendChild(bookInfo);
    }
} else {
    let noResultMsg = document.createElement("p");
    noResultMsg.textContent = "No Matching Books Found";
    searchResult.appendChild(noResultMsg);
}