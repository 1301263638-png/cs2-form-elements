function processForm(event) {
    event.preventDefault();
    let fNameInput = document.getElementById("firstname");
    let lNameInput = document.getElementById("lastname");

    showResults(fNameInput.value, lNameInput.value);
}

function showResults(first, last) {
    let p = document.createElement("p");
    p.innerText = last + ", " + first;
    document.body.appendChild(p);
}