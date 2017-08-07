var sattel = function() {

    var self = this;


    self.getSattellist = function(count) {
        var text = '';
        for (var i=1; i <= count; i++) {
            text += getHtml(i);
        }
        return text;
    }


    getHtml = function(i) {
        var text = '<div class="product-wrapper">'
             + '<img src="images/sattelbezug-small/Sattelbezug-' + pad3(i) + '.jpg" class="product" />'
             + '</div>\n';
        return text;
    }


    pad3 = function(num) {
        return ("000" + num).substr(-3,3);
    }


    return self;
}();


document.getElementById("sattelliste").innerHTML = sattel.getSattellist(35);

/* HTML
<div id="sattelfotos"></div>
*/
