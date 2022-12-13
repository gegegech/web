var glocke = new function() {

    var self = this;

    self.preis = '14.-';
    self.preisVersand = '10.-';
    self.preisTotal = '24.-';

        // Liste aller Glockebilder. Die Bilder müssen im Namensformat 'Glockebezug-038.jpg' vorliegen.
        self.liste = listeGlockeGlobal;

    self.getGlockelist = function() {
        var text = '';
        for (var i in self.liste) {
            text += getHtml(self.liste[i]);
        }
        return text;
    }


    getHtml = function(bundle) {
        var text = '<div class="product-wrapper" onclick="selector.showSelection(\'' + escape(JSON.stringify(bundle)) + '\')" class="product">'
             + '<img src="images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />'
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             // + (sattel.liste.indexOf(ipad) > -1) ? '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + MATCH + '</div>'
             //   : '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             + '</div>\n';
        return text;
    }


    self.buy = function(bundle) {
        if(bundle) {
            global.selected = JSON.parse(unescape(bundle));
        }
        else {  // buttons in form are pressed
        }
        var pic = '<img src="images/glocke-large/Veloglocke-' + global.selected.Glocke + '.jpg" />';
        document.getElementById("pic").innerHTML = pic;
        document.getElementById("itemNr").value = global.selected.Glocke;
        document.getElementById("bellNr").value = global.selected.Glocke;
        document.getElementById("template").value = "template-glocke-email-invoice";

        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionGlocke').addClass('selected');
        $('#buyForm').removeClass('hidden');
        $.get("https://gegege-backend.herokuapp.com/wake");

        document.getElementById("id").value = '#' + Math.random().toString(36).substr(2, 6);
    }

    self.hide = function() {
         $('#buyForm').addClass('hidden');
    }

    return self;
}();


document.getElementById("glockeliste").innerHTML = glocke.getGlockelist();
$(".preisGlocke").html(glocke.preis);


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!(iOS)) {
    $('.products').addClass('pc');
}

/* HTML
<div id="glockefotos"></div>
*/
