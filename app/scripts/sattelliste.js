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
        var text = '<div>'
             + '<img src="pics/sattelbezug/Sattelbez_neue_HP%20' + pad3(i) + '.jpg" class="sattel" />'
             + '</div>\n';
        return text;
    }


    pad3 = function(num) {
        return ("000" + num).substr(-3,3);
    }
    

    return self;
}();


document.getElementById("sattelfotos").innerHTML = sattel.getSattellist(33);

/* HTML
<div id="sattelfotos"></div>
*/
