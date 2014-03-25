
function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;

    var domain = a.hostname;

    return domain;
}

var check = self.port.on("getDomain", function(url) {
    var domain = getDomain(url);

    self.port.emit("setDomain",domain);

});

