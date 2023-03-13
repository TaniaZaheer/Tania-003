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
        window.location.href = "Homepage.html";
        return false;
    }
}
