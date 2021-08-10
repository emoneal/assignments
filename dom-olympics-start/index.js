var header = document.getElementById("header");
var h1 = document.createElement("h1");
var nameSpan = document.createElement("span");
var otherText = document.createElement("span");
var clear = document.getElementById("clear-button");
var messages = document.getElementsByClassName("messages");


h1.textContent = "JavaScript Made This!!";
header.append(h1);

nameSpan.textContent = "Emi ";
otherText.textContent = "wrote the JavaScript";


header.append(nameSpan);
header.append(otherText);

nameSpan.style.color = 'blue';
header.style.margin = 'auto';
header.style.alignContent = "center";

function removeElementsByClass(messages) {
    while (messages.length > 0) {
        messages[0].remove();
    
    }

    clear.addEventListener("click", function() {
    removeElementsByClass(messages);
    alert("Cleared!")
}) 
}

