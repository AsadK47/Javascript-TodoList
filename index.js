
// Create a new list item when clicking on the "Add" button
function newAdd() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var textNode = document.createTextNode(inputValue);

    li.appendChild(textNode);

    if (inputValue === '') {
        alert("Please type something...");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var xSymbol = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(xSymbol);
    li.appendChild(span);
}

// Add a "check" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "li") {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("Span");
    var txt = document.createTextNode("\u00D7");
}