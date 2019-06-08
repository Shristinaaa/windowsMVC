windowBootloader = function () {
    storedData = localStorage.getItem('windows');
    actualData = JSON.parse(storedData);
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
}, 4000);

