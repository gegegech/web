var glocke = new function() {

    var self = this;

    self.preis = '14.-';
    self.preisVersand = '10.-';
    self.preisTotal = '24.-';

    self.liste = [
        // Liste aller Glockebilder. Die Bilder müssen im Namensformat 'Glockebezug-038.jpg' vorliegen.
        // { "Sattel": "006", "Glocke": "006", "Bem": "1 pimp my bike" },
        // { "Sattel": "002", "Glocke": "002", "Bem": "1 rosa" },
        // { "Sattel": "043", "Glocke": "043", "Bem": "1 rosa" },
        // { "Sattel": "045", "Glocke": "045", "Bem": "1 rosa" },
        { "Sattel": "8465", "Glocke": "8562", "Bem": "1 rosa" },
        { "Sattel": "8429", "Glocke": "8561", "Bem": "1 rosa" },
        { "Sattel": "8463", "Glocke": "8559", "Bem": "1 rosa" },
        { "Sattel": "8462", "Glocke": "8558", "Bem": "1 rosa" },
        { "Sattel": "8461", "Glocke": "8557", "Bem": "1 rosa" },
        { "Sattel": "8460", "Glocke": "8547", "Bem": "1 rosa" },
        { "Sattel": "8459", "Glocke": "8560", "Bem": "1 rosa" },
        { "Sattel": "8460", "Glocke": "8547", "Bem": "1 rosa" },
        { "Sattel": "8459", "Glocke": "8560", "Bem": "1 rosa" },
        { "Sattel": "8428", "Glocke": "8547", "Bem": "2 rot" },
        { "Sattel": "8428", "Glocke": "8547", "Bem": "2 rot" },
        { "Sattel": "8428", "Glocke": "8547", "Bem": "2 rot" },
        { "Sattel": "8449", "Glocke": "8548", "Bem": "2 rot" },
        { "Sattel": "8457", "Glocke": "8556", "Bem": "2 rot" },
        { "Sattel": "8456", "Glocke": "8555", "Bem": "2 rot" },
        { "Sattel": "0118", "Glocke": "0122", "Bem": "2 rot" },
        { "Sattel": "8457", "Glocke": "8556", "Bem": "2 rot" },
        { "Sattel": "8456", "Glocke": "8555", "Bem": "2 rot" },
        { "Sattel": "8455", "Glocke": "8554", "Bem": "2 rot" },
        // { "Sattel": "091", "Glocke": "0104", "Bem": "2 rot" },
        { "Sattel": "8453", "Glocke": "8552", "Bem": "3 andere" },
        { "Sattel": "8545", "Glocke": "8553", "Bem": "3 andere" },
        { "Sattel": "8452", "Glocke": "8551", "Bem": "3 andere" },
        { "Sattel": "8451", "Glocke": "8550", "Bem": "3 andere" },
        { "Sattel": "8450", "Glocke": "8549", "Bem": "3 andere" },
        { "Sattel": "8447", "Glocke": "8546", "Bem": "3 andere" },
        { "Sattel": "8446", "Glocke": "8545", "Bem": "3 andere" },
        { "Sattel": "8445", "Glocke": "8544", "Bem": "3 grün" },
        { "Sattel": "8444", "Glocke": "8543", "Bem": "3 grün" },
        // { "Sattel": "015", "Glocke": "060", "Bem": "3 grün" },
        // { "Sattel": "016", "Glocke": "016", "Bem": "3 grün" },
        // { "Sattel": "054", "Glocke": "054", "Bem": "3 grün" },
        // { "Sattel": "077", "Glocke": "065", "Bem": "3 grün" },
        { "Sattel": "8443", "Glocke": "8542", "Bem": "3 grün" },
        { "Sattel": "8442", "Glocke": "8541", "Bem": "3 grün" },
        // { "Sattel": "018", "Glocke": "069", "Bem": "3 grün" },
        // { "Sattel": "094", "Glocke": "094", "Bem": "3 grün" },
        // { "Sattel": "096", "Glocke": "096", "Bem": "3 grün" },
        // { "Sattel": "0105", "Glocke": "0106", "Bem": "3 grün" },
        // { "Sattel": "050", "Glocke": "0111", "Bem": "3 grün" },
        { "Sattel": "8441", "Glocke": "8540", "Bem": "4 blau" },
        { "Sattel": "8440", "Glocke": "8539", "Bem": "4 blau" },
        { "Sattel": "8439", "Glocke": "8538", "Bem": "4 blau" },
        { "Sattel": "8438", "Glocke": "8537", "Bem": "4 blau" },
        { "Sattel": "8437", "Glocke": "8536", "Bem": "4 blau" },
        // { "Sattel": "027", "Glocke": "027", "Bem": "4 blau" },
        // { "Sattel": "029", "Glocke": "029", "Bem": "4 blau" },
        // { "Sattel": "030", "Glocke": "030", "Bem": "4 blau" },
        // { "Sattel": "030", "Glocke": "0103", "Bem": "4 blau" },
        // { "Sattel": "044", "Glocke": "0120", "Bem": "1 blau" },
        { "Sattel": "8434", "Glocke": "8534", "Bem": "4 blau" },
        // { "Sattel": "0101", "Glocke": "0109", "Bem": "4 blau" },
        { "Sattel": "8436", "Glocke": "8535", "Bem": "4 blau" },
        // { "Sattel": "055", "Glocke": "0101", "Bem": "4 blau" },
        // { "Sattel": "039", "Glocke": "0110", "Bem": "4 blau" },
        // { "Sattel": "026", "Glocke": "0113", "Bem": "4 blau" },
        // { "Sattel": "032", "Glocke": "032", "Bem": "5 andere" },
        // { "Sattel": "033", "Glocke": "033", "Bem": "5 andere" },
        // { "Sattel": "036", "Glocke": "036", "Bem": "5 andere" },
        // { "Sattel": "051", "Glocke": "051", "Bem": "5 andere" },
        { "Sattel": "8434", "Glocke": "8533", "Bem": "5 andere" },
        // { "Sattel": "060", "Glocke": "060", "Bem": "5 andere" },
        // { "Sattel": "086", "Glocke": "086", "Bem": "5 andere" },
        { "Sattel": "8433", "Glocke": "8532", "Bem": "5 andere" },
        { "Sattel": "8432", "Glocke": "8530", "Bem": "5 andere" },
        { "Sattel": "8431", "Glocke": "8531", "Bem": "5 andere" },
        { "Sattel": "8430", "Glocke": "8528", "Bem": "5 andere" },

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
