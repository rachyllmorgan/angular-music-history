app.factory("simple-storage", function () {
    var bucket = {};

    return {
        getStuff: function (junk) {
            if (bucket.hasOwnProperty(junk)) {
                return bucket[junk];
            }
        },
        addStuff: function (key, value) {
            bucket[key] = value;
        }
    };
});