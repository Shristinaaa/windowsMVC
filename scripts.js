desktop = {
  menuDisplay: false,
  menuBox: null,

  openMenu: function() {
    window.addEventListener("contextmenu", function(event) {
      console.log("khdfdf");
      document.querySelector(".menu").style.display = "block";
      event.preventDefault();
      var left = arguments[0].clientX;
      var top = arguments[0].clientY;
      this.menuBox = document.querySelector(".menu");
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuDisplay = true;
    });

    window.addEventListener("click", function() {
      if (menuDisplay == true) {
        menuBox.style.display = "none";
      }
    });
  },

  changeBg: function() {
    var load = localStorage.getItem("background");
    document.querySelector("body").style.background = "url(" + load + ")";
    document.querySelector("body").style.backgroundSize = "cover";
  }
};

menu = {
  chooseMenuItem: function() {
    var menuObject = document.querySelector(".menu");
    menuObject.addEventListener("click", function() {
      document.querySelector("#file").click();
    });

    document.querySelector("#file").addEventListener("change", function() {
      menu.changeBackground();
    });
  },

  changeBackground: function() {
    var file = document.querySelector("#file").files[0];
    var fileReader = new FileReader();

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      alert("Choose a file");
    }

    console.log(file);

    fileReader.onloadend = function() {
      var wallpaper = "url(" + fileReader.result + ")";
      localStorage.setItem("background", fileReader.result);
    };
  }
};

desktop.openMenu();
desktop.changeBg();
menu.chooseMenuItem();
