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

let uidInput = document.querySelector("#uid");
uidInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(uidInput.value);
});

let addressInput = document.querySelector("#home_address");
addressInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(addressInput.value);
});

// Listen for form submit
function onSubmit(e) {
    e.preventDefault();
  }

  console.log(nameInput);
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(uidInput.value);
  console.log(addressInput.value);
  
  // Select entire form & addEventListener to FORM
  let myForm = document.querySelector("#my-form");
  myForm.addEventListener('submit', onSubmit);



 // As & when users get registered add into LIST
 let userList = document.querySelector("#users");


 if(nameInput.value === '' || emailInput.value === '' || uidInput.value === '' || addressInput.value === '')
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
   li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${uidInput.value}: ${addressInput.value}`));

   //Append to ul
   userList.appendChild(li);
    //Clear fields
   nameInput.value = '';
   emailInput.value = '';
   uidInput.value = '';
   addressInput.value = '';
 }
