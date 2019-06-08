ourwindow = function () {
  this.clone = null;
  this.model = {
    id: 0,
    height: "500px",
    width: "600px",
    top: "20px",
    left: "60px",
    "z-index": 0,
    state: "normal",
  },

    this.close = function () {
      var newThis = this;
      this.clone.remove();
      collection.objects = collection.objects.filter(function (item) {
        return item.model.id != newThis.model.id;
      });
      delete (this);
      if (collection.objects.length == 0) {
        collection.objects = [];
        localStorage.removeItem('windows');
      }

    },

    this.minimize = function () {
      var newThis = this;
      console.log(newThis.model.left)
      this.model.width = "125px";
      this.model.height = "45px";
      this.model.top = "90vh";
      this.model.left = newThis.model.left;
      this.model.state = "minimized";
      this.minimizeStyle();

    }
  this.minimizeStyle = function
    () {
    newThis = this;
    this.clone.classList.add("minimized");
    this.clone.classList.remove("maximized");
    this.clone.classList.remove("restored");
    console.log(newThis.model.left);
    this.clone.style.left = newThis.model.left;
    this.clone.querySelector('.version1').classList.remove("hidden");
    this.clone.querySelector('.version2').classList.add("hidden");
  }
  this.maximize = function () {
    console.log(this.model.left);
    this.maximizeStyle();
    this.model.width = "97vw";
    this.model.height = "97vh";
    this.model.top = "2px";
    this.model.left = "5px";
    this.model.state = "maximized";

  }
  this.maximizeStyle = function () {
    this.clone.classList.remove("minimized");
    this.clone.classList.remove("restored");
    this.clone.classList.add("maximized");
    this.clone.querySelector('.version1').classList.remove("hidden");
    this.clone.querySelector('.version2').classList.add("hidden");
    // this.clone.querySelector('.fa-fa')
  }
  this.restore = function () {
    this.restoreStyle();
    console.log(this.model.width);
    this.model.height = "500px";
    this.model.width = "600px";
    this.model.top = "20px";
    this.model.left = "60px";
    this.model.state = "normal";
  }
  this.restoreStyle = function () {
    this.clone.classList.remove("minimized");
    this.clone.classList.remove("maximized");
    this.clone.classList.add("restored");
    this.clone.querySelector('.version1').classList.add("hidden");
    this.clone.querySelector('.version2').classList.remove("hidden");
  },

    this.drag = function () {
      dragElement(this.clone);
      var elementObj = this;
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
          elementObj.model.top = elmnt.style.top;
          elementObj.model.left = elmnt.style.left;
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    },

    this.render = function () {
      var thisWindow = this;
      var target = $("#originalwindow");
      this.clone = target.cloneNode(true);
      this.clone.classList.remove("hidden");
      this.clone.id = "window" + this.model.id;
      this.clone.style.width = this.model.width;
      this.clone.style.height = this.model.height;
      this.clone.style.top = this.model.top;
      this.clone.style.left = this.model.left;
      this.clone.addEventListener('click', function () {
        collection.objects.forEach(function (obj) {
          obj.model["z-index"] = 0;
          obj.clone.style.zIndex = 0;
        })
        thisWindow.model["z-index"] = 100;
        thisWindow.clone.style.zIndex = 100;
      });
      this.clone.style.zIndex = this.model["z-index"];
      this.clone.querySelector(".fa-times").addEventListener("click", function (e) {
        e.stopPropagation();
        thisWindow.close();
      });
      this.clone.querySelector(".fa-window-minimize").addEventListener("click", function () {
        thisWindow.minimize();
      });
      this.clone.querySelector(".version2").addEventListener("click", function () {
        thisWindow.maximize();
      });
      this.clone.querySelector(".version1").addEventListener("click", function () {
        thisWindow.restore();
      });
      if (thisWindow.model.state === "minimized") {
        this.minimizeStyle();
      }
      if (thisWindow.model.state === "maximized") {
        this.maximizeStyle();
      }
      if (thisWindow.model.state === "normal") {
        this.restoreStyle();
      }
      thisWindow.drag();
      $(".desktop").append(this.clone);
      console.log(thisWindow.model.state);
    }
}

// newWindow = new ourwindow();
// newWindow.render();
// collection.objects.push(newWindow);

