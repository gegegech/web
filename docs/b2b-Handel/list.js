// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// var order  = {}

var createList = new function() {

    var self = this;

    self.list = listeSattelGlobal;


    self.createList = function() {
        var html = '<div id="priceTitle" class="bundle">'
        + '<div>'
        + '<p id="priceSaddle"></p>'
        + '</div>'
        + '<div>'
        + '<p id="priceBell"></p>'
        + '</div>'
        + '<div>'
        + '<p id="priceSet"></p>'
        + '</div>'
        + '</div>\n';
        for (var i in self.list) {
            html += getHtmlForOneBundle(self.list[i]);
        }
        html += getHtmlForPackaging();
        return html;
    }

    getHtmlForOneBundle = function(bundle) {
        var html = '<div class="bundle">'
             + '<div>'
             + '<img class="itemImage" src="../images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "sattel" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '<div>'
             + '<img class="itemImage" src="../images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "glocke" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '<div>'
             + '<img class="itemImage" src="../images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
             + '<img class="itemImageSmall" src="../images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "set" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '</div>\n';
        return html;
    }

    getHtmlForPackaging = function() {
        var html = '<div class="bundle">'
            + '<div>'
            + '<p style="font-size:150%;transform: translate(-50%,-50%);top:50%;left:50%;margin:0;position:absolute;">'+pricePackaging+'.-</p>'
            + '</div>'
            + '<div>'
            + '<img class="itemImage" src="../images/packaging/packaging.jpg" />'
            + '<input id="' + "packaging" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
            + '</div>'
            + '</div>\n';
        return html;
    }

    return self;
}();


document.getElementById("articles").innerHTML = createList.createList();

