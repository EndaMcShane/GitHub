//Get the button for scroll back to top
let mybutton = document.getElementById("btn-back-to-top");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("Scroll");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Javascript function that toggles the dark-mode and icons
function toggleMode() {
  const body = document.body;
  const icon = document.getElementById('darkmode');

  body.classList.toggle('dark-mode');

  if (icon.classList.contains('fa-sun')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // Moon icon for dark mode
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Sun icon for light mode
  }
}


// ------------------------------------------------------------------------------------------------------

// Javascript for validating our contact form

function checkName() {
  // Using .trim() to remove any whitespace around the input
  var name = document.getElementById("name").value.trim();
  // check if name is blank
  if (name == '') {
    // change background colour to red if there is bad input.
    document.getElementById('name').classList.add('badInput');
    document.getElementById('name').setCustomValidity('You must enter a name');
    // if invalid return false, we need this for the checkValidity() method
    return false;
  }
  else {
    // reset the custom validity message when input is valid.
    document.getElementById('name').setCustomValidity('');
    return true;
  }
}

function checkEmail() {
  // get email input and trim
  var email = document.getElementById('email').value.trim();
  // email regular expression for correct email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    // If email is invalid, show this error message
    document.getElementById('email').classList.add('badInput');
    document.getElementById('email').setCustomValidity("Invalid Email Address format!");
    return false;
  }
  else {
    // If the email is valid, we clear the custom validity
    document.getElementById('email').setCustomValidity('');
    return true;
  }
}

function checkPhoneNum() {
  var phoneNum = document.getElementById("phoneno").value.trim();

  if (phoneNum.length < 7) {
    document.getElementById('phoneno').classList.add('badInput');
    document.getElementById("phoneno").setCustomValidity("Phone Number must be at least 7 characters long");
    return false;
  }
  else {
    document.getElementById("phoneno").setCustomValidity('');
    return true;
  }
}

function checkSubject() {
  var subject = document.getElementById("subject").value.trim();

  if (subject == '') {
    document.getElementById('subject').classList.add('badInput');
    document.getElementById('subject').setCustomValidity('Subject cannot be empty');
    return false;
  }
  else {
    // reset the custom validity message when input is valid.
    document.getElementById('subject').setCustomValidity('');
    return true;
  }
}

function checkMessage() {
  var message = document.getElementById("message").value.trim();

  if (message == '') {
    document.getElementById('message').classList.add('badInput');
    document.getElementById('message').setCustomValidity('Message cannot be empty');
    return false;
  }
  else {
    document.getElementById('message').setCustomValidity('');
    return true;
  }
}


// form submission function
function formSubmit() {

  // call all validating functions
  checkName();
  checkEmail();
  checkPhoneNum();
  checkSubject();
  checkMessage();
  //

  // Here we are checking if any fields have invalid input - if valid then apply styling and show message
  if (document.getElementById('contactForm').checkValidity()) {
    // If valid, apply styling to submitted fields
    document.getElementById('contactForm').classList.add('submitted');

    // Print to user and console
    alert("Form submitted successfully");
    console.log('Form submitted successfully');

    // reload the page instead of submitting as this is only a template website
    window.location.reload();

  }

  // If any field is invalid, we prevent form submission by returning false
  else {
    return false;
  }

}
// phone number validation for order page
function checkmob() {
  var str = document.getElementById("mblenmb").value;
  var ptr = /^07[072568][0-9]{7}$/;

  var chck = ptr.test(str);

  if (!chck)
    alert("Moblie Number is Incorrect");
}
// bill
function createBill() {
  var index = 0;
  var items = ["null", "null", "null", "null"];
  var quantities = ["null", "null", "null", "null"];
  var prices = ["null", "null", "null", "null"];



  var e1 = document.getElementById("item1");
  var itemselected1 = e1.options[e1.selectedIndex].value;
  if (itemselected1 != "1") {
    items[index] = itemselected1;
    quantities[index] = document.getElementById("q1").value;
    prices[index] = document.getElementById("p1").value;
    index++;
  }


  var e2 = document.getElementById("item2");
  var itemselected2 = e2.options[e2.selectedIndex].value;
  if (itemselected2 != "1") {
    items[index] = itemselected2;
    quantities[index] = document.getElementById("q2").value;
    prices[index] = document.getElementById("p2").value;
    index++;
  }

  var e3 = document.getElementById("item3");
  var itemselected3 = e3.options[e3.selectedIndex].value;
  if (itemselected3 != "1") {
    items[index] = itemselected3;
    quantities[index] = document.getElementById("q3").value;
    prices[index] = document.getElementById("p3").value;
    index++;
  }

  var e4 = document.getElementById("item4");
  itemselected4 = e4.options[e4.selectedIndex].value;
  if (itemselected4 != "1") {
    items[index] = itemselected4;
    quantities[index] = document.getElementById("q4").value;
    prices[index] = document.getElementById("p4").value;
    index++;
  }

  var fTot = 0;
  strt(1);
  for (var i = 0; i < index; i++) {
    document.write("<tr>");
    createtbl(items[i]);
    createtbl(quantities[i]);
    createtbl(prices[i]);
    var tot = parseInt(quantities[i]) * parseInt(prices[i]);
    document.write("<td>" + tot + "</td>");
    fTot += tot;
    document.write("</tr>");
  }
  document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>" + fTot + "</td><tr>");
  strt(2);
}
function createtbl(x) {
  document.write("<td>" + x + "</td>");
}

function strt(n) {
  if (n == 1) {
    document.writeln("<h1 style=\"text-align:center;\">The Bush Tucker Bill</h1>");
    document.writeln("<table width=\"90%\" border=\"1\">");
    document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");
  }
  else
    document.write("</table>");
}

function createTot(x, y) {
  var tot = parseInt(x) * parseInt(y);
  document.write("<td>" + tot + "</td>");
}
// cookies
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded");
  // Check if the user has previously accepted the cookies
  if (!getCookie("cookies_accepted")) {
    console.log("Cookies not accepted before, showing prompt");
    // If not, display the cookies prompt
    document.getElementById("cookies").style.display = "block";
  } else {
    console.log("Cookies already accepted, not showing prompt");
  }

  // Add event listener to the button
  document.getElementById("cookies-btn").addEventListener("click", function () {
    console.log("Cookies accepted by the user");
    // Set a cookie to remember that the user accepted the cookies
    setCookie("cookies_accepted", "true", 365);
    // Hide the cookies prompt
    document.getElementById("cookies").style.display = "none";
  });
});

// Function to set a cookie
function setCookie(name, value, days) {
  console.log("Setting cookie:", name, value);
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  console.log("Getting cookie:", name);
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded");
  // Check if the user has previously accepted the cookies
  if (!localStorage.getItem("cookies_accepted")) {
    console.log("Cookies not accepted before, showing prompt");
    // If not, display the cookies prompt
    document.getElementById("cookies").style.display = "block";
  } else {
    console.log("Cookies already accepted, not showing prompt");
  }

  // Add event listener to the button
  document.getElementById("cookies-btn").addEventListener("click", function () {
    console.log("Cookies accepted by the user");
    // Set a flag in localStorage to remember that the user accepted the cookies
    localStorage.setItem("cookies_accepted", "true");
    // Hide the cookies prompt
    document.getElementById("cookies").style.display = "none";
  });

  console.log("End of DOMContentLoaded event listener");
});

//sign up button
document.querySelector('.cta button').addEventListener('click', function() {
  // Code to handle sign-up button click
  // Example: Redirect user to sign-up page
  window.location.href = 'signup.html';
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Validation
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var isValid = true;

  if (username === "") {
      usernameError.textContent = "Username is required";
      isValid = false;
  } else {
      usernameError.textContent = "";
  }

  if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
  } else {
      emailError.textContent = "";
  }

  if (!isValid) {
      return; // Don't proceed if form is not valid
  }

  // Save data to local storage
  var userData = {
      username: username,
      email: email
  };
  localStorage.setItem("userData", JSON.stringify(userData));

  event.target.reset();
});