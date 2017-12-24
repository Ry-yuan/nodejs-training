var fs = require('fs');

var DIR = '../file';

fs.readdir(DIR, function(err, files) {
    // var i = 1;
    files.forEach(function(filename, index) {
        // console.log(filename, i + ".txt");
        var oldPath = DIR + '/' + filename;
        var newPath = DIR + '/' + 'file' + index + '.txt';
        fs.rename(oldPath, newPath, function(err) {
            if (!err) {
                console.log('rename succeed');
            }
        });
        // i++;
    });
})
