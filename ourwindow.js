ourwindow = function () {

  this.clone = null,

    this.model = {
      id: 0,
      height: "500px",
      width: "600px",
      top: "20px",
      left: "60px",
      "z-index": 0
    },

    this.close = function () {
      // console.log("oiadif");
      // this.clone.remove();
    },

    this.minimize = function () { },

    this.maximize = function () { },

    this.drag = function () { },

    this.render = function () {
      thisWindow = this;
      var target = $("#originalwindow");
      this.clone = target.cloneNode(true);
      this.clone.style.width = this.model.width;
      this.clone.style.height = this.model.height;
      this.clone.style.top = this.model.top;
      this.clone.style.left = this.model.left;
      this.clone.style.zIndex = this.model['z-index'];
      this.clone.id = "random";
      this.clone.classList.remove('hidden');
      $(".desktop").append(this.clone);

      this.clone.querySelector(".fa-times").addEventListener("click", function () {
        // thisWindow.close();
      })

    };
}

newWindow = new ourwindow();
newWindow.render();
collection.objects.push(newWindow);



