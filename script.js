console.log("Script started ")

function processForm(event)
    event.preventDefault();
     console.log("click");


     let fNameInput = document.getElementById("firstname")
     let firstname = fnameInput.value;
     console.log(firstname)


     let dateInput = document.getElementById("birthdate")
     let birthdate = dateInput.value
     console.log(birthdate);