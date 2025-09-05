document.addEventListener("DOMContentLoaded", addElement);

    function addElement() {
        //create a new section element
        const newSection = document.createElement("section");

        //add a class to the new section
        newSection.classList.add("chapter-section");

        //create a new paragraph element
        const newParagraph = document.createElement("p");

        //create the text content for the paragraph
        const newContent = document.createTextNode("The is a new paragraph inside a new section.");

        //add the text content to the paragraph
        newParagraph.appendChild(newContent);

        //add the paragraph to the section
        newSection.appendChild(newParagraph);

        //find the existing section element
        const existingSection = document.querySelector("section.highlight-paragraph");

        // insert the new section after the existing section
        existingSection.insertAdjacentElement("afterend", newSection);
    }
