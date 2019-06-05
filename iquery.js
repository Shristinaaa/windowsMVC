var collection = {
    objects: [],
    save: function () {
        var dataToStore = [];
        this.objects.forEach(function (instance) {
            dataToStore.push(instance.model);
        });
        localStorage.setItem('windows', JSON.stringify(dataToStore))
    }
}



var $ = function (value) { return document.querySelector(value) };
