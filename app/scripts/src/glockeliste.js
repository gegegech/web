var glocke = new function() {

    var self = this;

    self.preis = '14.-';
    self.preisVersand = '9.-';
    self.preisTotal = '23.-';

    self.liste = [
        // Liste aller Glockebilder. Die Bilder müssen im Namensformat 'Glockebezug-038.jpg' vorliegen.
        { "Sattel": "006", "Glocke": "006", "Bem": "1 pimp my bike" },
        { "Sattel": "002", "Glocke": "002", "Bem": "1 rosa" },
        { "Sattel": "043", "Glocke": "043", "Bem": "1 rosa" },
        { "Sattel": "045", "Glocke": "045", "Bem": "1 rosa" },
        { "Sattel": "049", "Glocke": "049", "Bem": "1 rosa" },
        { "Sattel": "087", "Glocke": "064", "Bem": "1 rosa" },
        // { "Sattel": "066", "Glocke": "066", "Bem": "1 rosa" },
        { "Sattel": "078", "Glocke": "099", "Bem": "1 rosa" },
        { "Sattel": "067", "Glocke": "068", "Bem": "1 rosa" },
        { "Sattel": "0100", "Glocke": "032", "Bem": "1 rosa" },
        { "Sattel": "0106", "Glocke": "0107", "Bem": "1 rosa" },
        // { "Sattel": "090", "Glocke": "0104", "Bem": "2 rot" },
        { "Sattel": "013", "Glocke": "013", "Bem": "2 rot" },
        { "Sattel": "038", "Glocke": "038", "Bem": "2 rot" },
        { "Sattel": "040", "Glocke": "040", "Bem": "2 rot" },
        { "Sattel": "085", "Glocke": "063", "Bem": "2 rot" },
        { "Sattel": "097", "Glocke": "097", "Bem": "2 rot" },
        // { "Sattel": "091", "Glocke": "0104", "Bem": "2 rot" },
        { "Sattel": "098", "Glocke": "0105", "Bem": "3 grün" },
        { "Sattel": "0103", "Glocke": "0102", "Bem": "3 grün" },
        { "Sattel": "084", "Glocke": "062", "Bem": "3 grün" },
        { "Sattel": "058", "Glocke": "059", "Bem": "3 grün" },
        { "Sattel": "015", "Glocke": "015", "Bem": "3 grün" },
        // { "Sattel": "016", "Glocke": "016", "Bem": "3 grün" },
        // { "Sattel": "054", "Glocke": "054", "Bem": "3 grün" },
        { "Sattel": "077", "Glocke": "065", "Bem": "3 grün" },
        // { "Sattel": "068", "Glocke": "068", "Bem": "3 grün" },
        { "Sattel": "018", "Glocke": "069", "Bem": "3 grün" },
        { "Sattel": "094", "Glocke": "094", "Bem": "3 grün" },
        { "Sattel": "096", "Glocke": "096", "Bem": "3 grün" },
        { "Sattel": "0105", "Glocke": "0106", "Bem": "3 grün" },
        { "Sattel": "023", "Glocke": "023", "Bem": "4 blau" },
        { "Sattel": "026", "Glocke": "026", "Bem": "4 blau" },
        // { "Sattel": "027", "Glocke": "027", "Bem": "4 blau" },
        { "Sattel": "029", "Glocke": "029", "Bem": "4 blau" },
        // { "Sattel": "030", "Glocke": "030", "Bem": "4 blau" },
        { "Sattel": "030", "Glocke": "0103", "Bem": "4 blau" },
        { "Sattel": "044", "Glocke": "044", "Bem": "1 blau" },
        { "Sattel": "037", "Glocke": "037", "Bem": "4 blau" },
        { "Sattel": "0101", "Glocke": "0109", "Bem": "4 blau" },
        { "Sattel": "0102", "Glocke": "0109", "Bem": "4 blau" },
        { "Sattel": "055", "Glocke": "0101", "Bem": "4 blau" },
        { "Sattel": "032", "Glocke": "032", "Bem": "5 andere" },
        // { "Sattel": "033", "Glocke": "033", "Bem": "5 andere" },
        { "Sattel": "036", "Glocke": "036", "Bem": "5 andere" },
        { "Sattel": "051", "Glocke": "051", "Bem": "5 andere" },
        // { "Sattel": "060", "Glocke": "060", "Bem": "5 andere" },
        { "Sattel": "086", "Glocke": "086", "Bem": "5 andere" },
        { "Sattel": "093", "Glocke": "093", "Bem": "5 andere" },

    ];


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
