function validateForm() {
    var firstName = document.forms["signup"]["firstName"].value;
    var lastName = document.forms["signup"]["lastName"].value;
    var email = document.forms["signup"]["email"].value;
    var password = document.forms["signup"]["password"].value;
    var confirmPassword = document.forms["signup"]["confirmPassword"].value;

    if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    if (firstName != "" || lastName != "" || email != "" || password != "" || confirmPassword != "") {
        window.location.href = "/homepage";
        return false;
    }
}
// script.js

function submitForm() {
    var email = document.forms["Update"]["Email"].value;
    var firstName = document.forms["Update"]["First_Name"].value;
    var lastName = document.forms["Update"]["Last_Name"].value;
    var price = document.forms["Update"]["price"].value;

    if (firstName === "" || lastName === "" || email === "" || price === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Perform additional validation or processing if needed

    window.location.href = "/submit";
    return false;
}
function confirmUpdate() {
    var email = document.forms["Checkout"]["Email"].value;
    var firstName = document.forms["Checkout"]["First_Name"].value;
    var lastName = document.forms["Checkout"]["Last_Name"].value;
    var price = document.forms["Checkout"]["price"].value;

    if (email === "" || firstName === "" || lastName === "" || price === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Perform additional validation or processing if needed

    alert("Your order is submitted. If you want to update the record, press Update button");
}


function redirectToUpdatePage() {
    window.location.href = "/checkout/update";
}