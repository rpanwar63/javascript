// add separate delete item icon
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close fas fa-times";
  myNodelist[i].appendChild(span);
}

// remove an item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var li = this.parentElement;
    li.parentElement.removeChild(li);
  };
}

// remove all checked items
function closeAll() {
  var items = document.getElementsByTagName("li");
  for (i = 0; i < items.length; i++) {
    if(items[i].className === "checked") {
        items[i].parentElement.removeChild(items[i]);
      }
    }
}

// save to local storage
function saveAll() {
  localStorage.clear();
  var count=0;
  var items = document.getElementsByTagName("li");
  for (i = 0; i < items.length; i++) {
    localStorage.setItem("item"+i, items[i].textContent);
    count++;
  }
  localStorage.setItem('count', count);
  document.getElementById("toast").style.opacity = "1";
  setTimeout(function(){document.getElementById("toast").style.opacity = "0";}, 1500);
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
  }
  else {
    document.getElementById("item-list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("span");
  span.className = "close fas fa-times";
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var li = this.parentElement;
      li.parentNode.removeChild(li);
    };
  }
}

// adding curremt items from local storage
function addCurrentItems() {
  var count = localStorage.getItem('count');
  for (var i = 0; i < count; i++) {
    var txt = localStorage.getItem('item'+i);
    var li = document.createElement("li");
    var t = document.createTextNode(txt);
    li.appendChild(t);
    document.getElementById("item-list").appendChild(li);
    
    var span = document.createElement("span");
    span.className = "close fas fa-times";
    li.appendChild(span);

    for (k = 0; k < close.length; k++) {
      close[k].onclick = function() {
        var li = this.parentElement;
        li.parentNode.removeChild(li);
      };
    }
  }
}