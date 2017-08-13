var preis = '25.-';


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
        var ipad = pad3(i);
        var text = '<div class="product-wrapper">'
             + '<img src="images/sattelbezug-small/Sattelbezug-' + ipad + '.jpg" onclick="sattel.buy(\'' + ipad + '\')" class="product" />'
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + preis + '</div>'
             + '</div>\n';
        return text;
    }


    pad3 = function(num) {
        return ("000" + num).substr(-3,3);
    }


    self.buy = function(str) {
        var pic = '<img src="images/sattelbezug-small/Sattelbezug-' + str + '.jpg" />';
        document.getElementById("pic").innerHTML = pic;
        $('.form').removeClass('hidden');

    }

    self.hide = function() {
         $('.form').addClass('hidden');
    }


    return self;
}();


document.getElementById("sattelliste").innerHTML = sattel.getSattellist(35);
$(".preis").html(preis);

/* HTML
<div id="sattelfotos"></div>
*/
