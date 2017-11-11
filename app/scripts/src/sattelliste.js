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
        var text = '<div class="product-wrapper" onclick="sattel.buy(\'' + ipad + '\')" class="product">'
             + '<img src="images/sattelbezug-small/Sattelbezug-' + ipad + '.jpg" />'
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
        document.getElementById("ArtikelNr").value = str;
        $('.form').removeClass('hidden');

        document.getElementById("orderform").action = "http://www.formular-chef.de/fc.cgi";
        document.getElementById("SP").value = 'g' + str + 'sxp';
        document.getElementById("referer").value = "gegege.ch";
        document.getElementById("absender").value = "info@gegege.ch";
        document.getElementById("_absender_feldname").value = "Email";
        document.getElementById("empfaenger").value = "info@gegege.ch,ansgar.john@swupp.ch";
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
