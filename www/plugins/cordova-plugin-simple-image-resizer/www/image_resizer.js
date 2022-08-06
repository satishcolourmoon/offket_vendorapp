cordova.define("cordova-plugin-simple-image-resizer.ImageResizer", function(require, exports, module) {
var ImageResizer = function () {
};

ImageResizer.prototype.resize = function (options, success, fail) {
    var defaultOptions = {
        fileName: 'image_resizer_' + Date.now() + '.jpg',
        quality: 90
    };

    options.fileName = options.fileName || defaultOptions.fileName;
    options.quality = options.quality || defaultOptions.quality;

    cordova.exec(function (uri) {
        success(uri);
    }, function (e) {
        fail(e);
    }, "ImageResizer", "resize", [options]);
};

var imageResizer = new ImageResizer();
module.exports = imageResizer;

});
