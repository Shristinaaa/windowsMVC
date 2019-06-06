menu = {
  chooseMenuItem: function () {
    var menuObject = document.querySelector(".menu");
    menuObject.addEventListener("click", function () {
      document.querySelector("#file").click();
    });

    document.querySelector("#file").addEventListener("change", function () {
      menu.changeBackground();
    });
  },

  changeBackground: function () {
    var file = document.querySelector("#file").files[0];
    var fileReader = new FileReader();

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      alert("Choose a file");
    }

    fileReader.onloadend = function () {
      localStorage.setItem("background", JSON.stringify(fileReader.result));
      desktop.changeBg();
    };
  }
};

menu.chooseMenuItem();