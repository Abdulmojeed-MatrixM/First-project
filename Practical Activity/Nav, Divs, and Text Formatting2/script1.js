window.onload = addElement;

function addElement() {
    // create a new section element
    const newSection = document.createElement("section");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created section
    newSection.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    const currentSection = document.querySelector("#section-id-container");
    document.body.insertBefore(newSection, currentSection);
}