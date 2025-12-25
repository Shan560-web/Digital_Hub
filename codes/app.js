function sayHello() {
    let name = document.getElementById("nameInput").value;
    let output = document.getElementById("output");

    output.textContent = "Hello, " + name + " !!";
}
