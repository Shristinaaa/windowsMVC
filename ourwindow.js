ourwindow = function () {
  this.clone = null;
  this.model = {
    id: 0,
    height: "500px",
    width: "600px",
    top: "20px",
    left: "60px",
    "z-index": 0
  };

  this.close = function () {
    var newThis = this;
    this.clone.remove();
    collection.objects = collection.objects.filter(function (item) {
      return item.model.id != newThis.model.id;
    });
    delete (this);
  };

  this.minimize = function () {
    var newThis = this;
    this.clone.style.width = "125px";
    this.clone.style.height = "45px";
    this.clone.style.top = "590px";
    this.clone.style.left = "0px";
  };

  this.maximize = function () {
    var newThis = this;
    this.clone.style.width = "97vw";
    this.clone.style.height = "97vh";
    this.clone.style.top = "2px";
    this.clone.style.left = "5px";
  };

  this.restore = function () {

  };

  this.drag = function () {
    dragElement(this.clone);
    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  };

  this.render = function () {
    var thisWindow = this;
    var target = $("#originalwindow");
    this.clone = target.cloneNode(true);
    // this.clone.id = this.model.id;
    this.clone.style.width = this.model.width;
    this.clone.style.height = this.model.height;
    this.clone.style.top = this.model.top;
    this.clone.style.left = this.model.left;
    this.clone.style.zIndex = this.model["z-index"];
    this.clone.classList.remove("hidden");
    this.clone.querySelector(".fa-times").addEventListener("click", function (e) {
      e.stopPropagation();
      thisWindow.close();
    });
    this.clone.querySelector(".fa-window-minimize").addEventListener("click", function () {
      thisWindow.minimize();
    });
    this.clone.querySelector(".fa-window-restore").addEventListener("click", function () {
      thisWindow.maximize();
    });
    thisWindow.drag();
    $(".desktop").append(this.clone);
  };
}

newWindow = new ourwindow();
newWindow.render();
collection.objects.push(newWindow);