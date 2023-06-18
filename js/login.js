// step 1: add clicked event handler to submit button
document.getElementById("btn-submit").addEventListener("click", function() {
  // step 2: get the email address inside the email input field
  //  always remember to use. value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // console.log(email);
  // step 3: g et  password
  // step a: get password
  // step b: set id on the html element
  // step c: get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  // console.log(email, password);

  // DO NOT VERIFY email password on the client side
  // step 4: valid email password and check wheter valid
  if (email === "sagorcse@gmail.com" && password === "cse212") {
    window.location.href = "bank.html";
  } else {
    alert("Please correct your mail & password!!");
  }
});
