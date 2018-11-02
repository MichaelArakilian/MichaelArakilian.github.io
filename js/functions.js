var clicked = document.getElementById('comparePriceButton');
//
// var tableActive = false;
//
// clicked.addEventListener('click', function() {
//   if(tableActive == false) {
//     document.getElementById('comparePriceTable').style.display = "block";
//     document.getElementById('comparisonArrow').style.display = "block";
//     tableActive = true;
//   }
//   else if(tableActive == true) {
//     document.getElementById('comparePriceTable').style.display = "none";
//     document.getElementById('comparisonArrow').style.display = "none";
//     tableActive = false;
//   }
// });
//
var hovered = false;

clicked.addEventListener('mouseenter', function(e) {
  document.getElementById('comparePriceButtonText').style.color = "#627bec";
  document.getElementById('comparePriceButton').style.background = "white";
});
clicked.addEventListener('mouseleave', function(e) {
  document.getElementById('comparePriceButtonText').style.color = "white";
  document.getElementById('comparePriceButton').style.background = "linear-gradient(45deg, #56c8fb 0%, #627bed 100%)";

});













// All the code below is for storing the email

// Header Email Validation
function emailSignUp() {

  // Get form data
  var rawData = document.getElementById("email").value;

  // Regex Email Validation
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailIsValid = re.test(String(rawData).toLowerCase());

  // Is Valid, Is Invalid Actions
  if(emailIsValid == true) {
    var valResponse = document.getElementById("validationResponse");
    valResponse.innerHTML = "Success, check your email for a comfirmation.";
    valResponse.style.display = "block";
    valResponse.style.color = "green";
    document.getElementById("email").value = "";

    var database = firebase.database().ref('newsletter');

    (function writeUserData() {
      var newEntry = database.push();
      newEntry.set({
        email: rawData
      });
    })();

  }
  else if (emailIsValid == false) {
    var valResponse = document.getElementById("validationResponse");
    valResponse.innerHTML = "Invalid email address, double check your spelling and try again.";
    valResponse.style.display = "block";
    valResponse.style.color = "#ff0033";
  }


}

// Footer Email Validation
function emailSignUpTwo() {

  // Get form data
  var rawDataTwo = document.getElementById("emailTwo").value;

  // Regex Email Validation
  var reTwo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailIsValidTwo = reTwo.test(String(rawDataTwo).toLowerCase());

  // Is Valid, Is Invalid (Actions)
  if(emailIsValidTwo == true) {
    var valResponseTwo = document.getElementById("validationResponseTwo");
    valResponseTwo.innerHTML = "Success, check your email for a comfirmation.";
    valResponseTwo.style.display = "block";
    valResponseTwo.style.color = "green";
    document.getElementById("emailTwo").value = "";

    var database = firebase.database().ref('newsletter');

    (function writeUserDataTwo() {
      var newEntryTwo = database.push();
      newEntryTwo.set({
        email: rawDataTwo
      });
    })();

  }
  else if (emailIsValidTwo == false) {
    var valResponseTwo = document.getElementById("validationResponseTwo");
    valResponseTwo.innerHTML = "Invalid email address, double check your spelling and try again.";
    valResponseTwo.style.display = "block";
    valResponseTwo.style.color = "#ff0033";
  }


}
