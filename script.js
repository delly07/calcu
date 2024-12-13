function calculate() {
    var expression = document.getElementById("expression").value.trim();
    var resultElement = document.getElementById("result");

    // Check if the input is "1+1"
    if (expression === "1+1") {
        resultElement.textContent = "imissyou";
    } else {
        resultElement.textContent = "Invalid expression, please enter 1+1.";
    }
}
