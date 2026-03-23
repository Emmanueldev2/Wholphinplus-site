// 3. Form validation
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Invalid email!");
        event.preventDefault(); // stops submission
    }
});

function enrollNow() {
    window.location.href = "services.html";
}