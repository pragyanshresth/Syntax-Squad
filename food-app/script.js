// JavaScript for Login and Role-based Redirection
function login() {
    const username = document.getElementById("username").value;
    if (username === "admin") {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    } else if (username === "manager") {
        localStorage.setItem("role", "manager");
        window.location.href = "manager.html";
    } else if (username === "customer") {
        localStorage.setItem("role", "customer");
        window.location.href = "customer.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username!";
    }
}