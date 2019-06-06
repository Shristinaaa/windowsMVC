windowBootloader = function () {
    storedData = localStorage.getItem('windows');
    actualData = JSON.parse(storedData);
    console.log(actualData);
    if (!!actualData) {
        actualData.forEach(function (windowData) {
            var newWindow = new ourwindow();
            newWindow.model = windowData;
            newWindow.render();
            collection.objects.push(newWindow);
        });
    }
}

windowBootloader();

setInterval(() => {
    collection.save();
}, 1000);

// ourwindow.dragElement(document.getElementById("window"));
// ourwindow.minimize(document.querySelectorAll(".fa-window-minimize"));
// ourwindow.maximize(document.querySelectorAll(".fa-window-maximize"));
