let library = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice"
]

function displayBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear the list before displaying books

    library.forEach(function (title, index) {
        let bookInfo = document.createElement("p");
        bookInfo.textContent = `${index + 1}. ${title}`;
        bookList.appendChild(bookInfo);
    });
}

function addBook(event) {
    event.preventDefault(); //Prevent from submission
    
    let titleInput = document.getElementById("bookTitle");
    let title = titleInput.value;
    
    library.push(title);
    
    titleInput.value = ""; // Clear the input field
    displayBooks();
}