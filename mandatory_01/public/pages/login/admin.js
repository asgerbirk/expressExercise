function displayContent() {
    const subject = document.getElementById("subject").value;
    const content = document.getElementById("content").value;
    const displayElement = document.getElementById("displayContent");

    const subjectElement = document.createElement("h4");
    subjectElement.innerText = subject;

    const contentElement = document.createElement("p");
    contentElement.innerText = content;

    subjectElement.appendChild(contentElement);
    displayElement.appendChild(subjectElement);
}

