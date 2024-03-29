

desktop = {
  changeBackground: function(val) {
    document.querySelector("body").style.background = val;
    console.log(val);
  }
};

var menuObject = document.querySelector(".menu");
menuObject.addEventListener("click", function() {
  document.querySelector("#file").click();
});
document.querySelector("#file").addEventListener("change", function() {
  menu.changeBg();
});

menu = {
  changeBg: function() {
    file = document.querySelector("#file").files[0];
    var fileReader = new FileReader();
    if (file) {
      var abc = fileReader.readAsDataURL(file);
    }

    fileReader.onloadend = function() {
      var wallpaperString = "url(" + fileReader.result + ")";

      desktop.changeBackground(wallpaperString);
    };
  }
};
