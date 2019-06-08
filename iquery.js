var $ = function (value) { return document.querySelector(value) };
var collection = {
    objects: [],
    save: function () {
        console.log(this.objects);
        var dataToStore = [];
        this.objects.forEach(function (instance) {
            dataToStore.push(instance.model);
        });
        localStorage.setItem('windows', JSON.stringify(dataToStore))
    }
}

