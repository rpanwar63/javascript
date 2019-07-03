// add separate delete item icon
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// remove an item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// remove all checked items
function closeAll() {
    var items = document.getElementsByTagName("li");
    for (i = 0; i < items.length; i++) {
        if(items[i].className === "checked") {
            var oldItems = items[i];
            oldItems.style.display = "none";
        }
    }
}

// select an item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// add item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    document.getElementById("input").placeholder="Add a ToDo first!";
    setInterval(function(){ 
        document.getElementById("input").placeholder="Add a ToDo";
    }, 3000);
  } else {
    document.getElementById("item-list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var oldItem = this.parentElement;
      oldItem.style.display = "none";
    };
  }
}