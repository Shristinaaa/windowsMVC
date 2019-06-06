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

  this.minimize = function () { };

  this.maximize = function () { };

  this.drag = function () { };

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
    $(".desktop").append(this.clone);
  };
};

newWindow = new ourwindow();
newWindow.render();
collection.objects.push(newWindow);