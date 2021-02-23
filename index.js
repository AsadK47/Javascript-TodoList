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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.div.style.display = "none";
    }
  }
}

// Add a "check" symbol when clicking on a list item
var list = document.querySelector("ul");

list.addEventListener('click', function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
