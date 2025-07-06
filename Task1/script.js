document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
let name=document.getElementById('name').Value;
let email=document.getElementById('email').Value;

if (name ==" " || email ==" ") {
    alert("Both fields must be filled.");
} else {
    alert("Form submitted succesfully");
}

});