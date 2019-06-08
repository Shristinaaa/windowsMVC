desktop = {
  menuDisplay: false,
  menuBox: null,

  openMenu: function () {
    window.addEventListener("contextmenu", function (event) {
      document.querySelector(".menu").style.display = "block";
      event.preventDefault();
      var left = arguments[0].clientX;
      var top = arguments[0].clientY;
      this.menuBox = document.querySelector(".menu");
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      this.menuDisplay = true;
    });

    window.addEventListener("click", function () {
      if (this.menuDisplay == true) {
        menuBox.style.display = "none";
      }
    });
  },

  changeBg: function () {
    var load = localStorage.getItem("background");
    document.querySelector("body").style.background = "url(" + load + ")";
    document.querySelector("body").style.backgroundSize = "cover";
  },

  render: function () {
    $(".fa-folder-plus").addEventListener("click", function () {
      var lastWindow = collection.objects.reverse()[0];
      newWindow = new ourwindow();
      lastWindow ? newWindow.model.id = lastWindow.model.id + 1 : newWindow.model.id = 0;
      lastWindow ? newWindow.model.top = parseInt(lastWindow.model.top) + 12 + 'px' : newWindow.model.top = 0;
      lastWindow ? newWindow.model.left = parseInt(lastWindow.model.left) + 12 + 'px' : newWindow.model.left = 0;
      lastWindow ? newWindow.model['z-index'] = lastWindow.model['z-index'] + 1 : newWindow.model['z-index'] = 0;
      newWindow.render();
      collection.objects.push(newWindow);
    });
  },

  tabPos: function () {
    var last
  }
};

desktop.openMenu();
desktop.changeBg();
desktop.render();



