window.onload = addElement;

function addElement() {
    // create a new section element
    const newSection = document.createElement("section");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created section
    newSection.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    /*
    const currentSection = document.querySelector("#chapter-section-id");
    document.body.insertBefore(newSection, currentSection); 
    */

    /*  This error means that currentSection (the element with id chapter-section-id) 
    is not a direct child of document.body.
    The insertBefore method only works if the reference node (currentSection) 
    is a child of the parent node (document.body).

    How to fix:
    Make sure the element with id chapter-section-id is directly inside <body>, 
    or use the correct parent node.
    
    Summary:
    You must call insertBefore on the parent of currentSection, not always on document.body.
    */
    const currentSection = document.querySelector("#chapter-section-id");
    if (currentSection && currentSection.parentNode) {
    currentSection.parentNode.insertBefore(newSection, currentSection);
    }
}
