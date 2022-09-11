// Keyboard Event
let nameInput = document.querySelector("#name");
nameInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(nameInput.value);
});

let emailInput = document.querySelector("#email");
emailInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(emailInput.value);
});

let mobilenumberInput = document.querySelector("#mobile_number");
mobilenumberInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(mobilenumberInput.value);
});

let collegenameInput = document.querySelector("#college_name");
collegenameInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(collegenameInput.value);
});

// Listen for form submit
function onSubmit(e) {
    e.preventDefault();
  }

  console.log(nameInput);
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(mobilenumberInput.value);
  console.log(collegenameInput.value);
  
  // Select entire form & addEventListener to FORM
  let myForm = document.querySelector("#my-form");
  myForm.addEventListener('submit', onSubmit);



 // As & when users get registered add into LIST
 let userList = document.querySelector("#users");


 if(nameInput.value === '' || emailInput.value === '' || mobilenumberInput.value === '' || collegenameInput.value === '')
 {
   msg.classList.add('error');
   msg.innerHTML = 'Please enter all fields';
   setTimeout(() => msg.remove(), 3000);
 }
 else
 {
   // Create new list item with user
   let li = document.createElement('li');

   // Add text node with input values
   li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${mobilenumberInput.value}: ${collegenameInput.value}`));

   //Append to ul
   userList.appendChild(li);
    //Clear fields
   nameInput.value = '';
   emailInput.value = '';
   mobilenumberInput.value = '';
   collegenameInput.value = '';
 }
