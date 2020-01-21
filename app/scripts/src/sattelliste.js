var global = { selected: { sattel: "", glocke: ""} };


var sattel = new function() {

    var self = this;

    self.preis = '25.-';
    self.preisVersand = '2.-';
    self.preisTotal = '27.-';

    self.liste = [
        // Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
        { "Sattel": "002", "Glocke": "002", "Bem": "1 rosa" },
        { "Sattel": "006", "Glocke": "006", "Bem": "1 rosa" },
        // { "Sattel": "092", "Glocke": "006", "Bem": "1 rosa" },
        // { "Sattel": "007", "Glocke": "086", "Bem": "1 rosa" },
        { "Sattel": "043", "Glocke": "043", "Bem": "1 rosa" },
        { "Sattel": "086", "Glocke": "086", "Bem": "1 rosa" },
        { "Sattel": "087", "Glocke": "064", "Bem": "1 rosa" },
        { "Sattel": "045", "Glocke": "045", "Bem": "1 rosa" },
        { "Sattel": "049", "Glocke": "049", "Bem": "1 rosa" },
        { "Sattel": "053", "Glocke": "006", "Bem": "1 rosa" },
        { "Sattel": "058", "Glocke": "059", "Bem": "1 rosa" },
        { "Sattel": "078", "Glocke": "099", "Bem": "1 rosa" },
        { "Sattel": "075", "Glocke": "067", "Bem": "1 rosa" },
        { "Sattel": "0106", "Glocke": "0107", "Bem": "1 rosa" },
        { "Sattel": "0104", "Glocke": "0108", "Bem": "2 rot" },
        { "Sattel": "009", "Glocke": "006", "Bem": "2 rot" },
        { "Sattel": "012", "Glocke": "006", "Bem": "2 rot" },
        { "Sattel": "013", "Glocke": "013", "Bem": "2 rot" },
        { "Sattel": "097", "Glocke": "097", "Bem": "2 rot" },
        // { "Sattel": "014", "Glocke": "006", "Bem": "2 rot" },
        { "Sattel": "091", "Glocke": "0104", "Bem": "2 rot" },
        { "Sattel": "038", "Glocke": "038", "Bem": "2 rot" },
        { "Sattel": "040", "Glocke": "040", "Bem": "2 rot" },
         // { "Sattel": "041", "Glocke": "041", "Bem": "2 rot" },
        // { "Sattel": "079", "Glocke": "006", "Bem": "2 rot" },
        { "Sattel": "085", "Glocke": "063", "Bem": "2 rot" },
        { "Sattel": "0103", "Glocke": "0102", "Bem": "3 grün" },
        // { "Sattel": "093", "Glocke": "093", "Bem": "5 andere" },
        { "Sattel": "090", "Glocke": "0104", "Bem": "3 grün" },
        { "Sattel": "084", "Glocke": "062", "Bem": "3 grün" },
        // { "Sattel": "059", "Glocke": "059", "Bem": "3 grün" },
        { "Sattel": "015", "Glocke": "015", "Bem": "3 grün" },
        { "Sattel": "016", "Glocke": "016", "Bem": "3 grün" },
        { "Sattel": "096", "Glocke": "096", "Bem": "3 grün" },
        { "Sattel": "094", "Glocke": "094", "Bem": "3 grün" },
        { "Sattel": "017", "Glocke": "006", "Bem": "3 grün" },
        { "Sattel": "018", "Glocke": "069", "Bem": "3 grün" },
        // { "Sattel": "054", "Glocke": "054", "Bem": "3 grün" },
        { "Sattel": "077", "Glocke": "065", "Bem": "3 grün" },
        // { "Sattel": "080", "Glocke": "006", "Bem": "3 grün" },
        { "Sattel": "081", "Glocke": "068", "Bem": "3 grün" },
        // { "Sattel": "082", "Glocke": "068", "Bem": "3 grün" },
        { "Sattel": "039", "Glocke": "026", "Bem": "3 grün" },
        // { "Sattel": "046", "Glocke": "006", "Bem": "3 grün" },
        { "Sattel": "098", "Glocke": "0105", "Bem": "3 grün" },
        { "Sattel": "0105", "Glocke": "0106", "Bem": "3 grün" },
        // { "Sattel": "023", "Glocke": "023", "Bem": "4 blau" },
        { "Sattel": "025", "Glocke": "006", "Bem": "4 blau" },
        { "Sattel": "026", "Glocke": "026", "Bem": "4 blau" },
        // { "Sattel": "027", "Glocke": "027", "Bem": "4 blau" },
        // { "Sattel": "028", "Glocke": "006", "Bem": "4 blau" },
        { "Sattel": "029", "Glocke": "029", "Bem": "4 blau" },
        { "Sattel": "030", "Glocke": "0103", "Bem": "4 blau" },
        { "Sattel": "037", "Glocke": "037", "Bem": "4 blau" },
        { "Sattel": "044", "Glocke": "044", "Bem": "1 blau" },
        // { "Sattel": "048", "Glocke": "006", "Bem": "4 blau" },
        { "Sattel": "050", "Glocke": "006", "Bem": "4 blau" },
        { "Sattel": "055", "Glocke": "026", "Bem": "4 blau" },
        { "Sattel": "0101", "Glocke": "0109", "Bem": "4 blau" },
        { "Sattel": "0102", "Glocke": "0109", "Bem": "4 blau" },
        // { "Sattel": "056", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "057", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "061", "Glocke": "026", "Bem": "4 blau" },
        // { "Sattel": "089", "Glocke": "089", "Bem": "4 blau" },
        { "Sattel": "032", "Glocke": "032", "Bem": "5 andere" },
        // { "Sattel": "033", "Glocke": "033", "Bem": "5 andere" },
        { "Sattel": "034", "Glocke": "006", "Bem": "5 andere" },
        // { "Sattel": "035", "Glocke": "006", "Bem": "5 andere" },
        // { "Sattel": "036", "Glocke": "036", "Bem": "5 andere" },
        { "Sattel": "051", "Glocke": "051", "Bem": "5 andere" },
        { "Sattel": "062", "Glocke": "006", "Bem": "5 andere" },
        // { "Sattel": "052", "Glocke": "051", "Bem": "5 andere" },
        // { "Sattel": "042", "Glocke": "006", "Bem": "5 andere" },
        { "Sattel": "074", "Glocke": "074", "Bem": "5 andere" },
        { "Sattel": "093", "Glocke": "093", "Bem": "5 andere" },
        // { "Sattel": "059", "Glocke": "059", "Bem": "3 grün" },
        { "Sattel": "076", "Glocke": "006", "Bem": "5 andere" },
        { "Sattel": "0100", "Glocke": "032", "Bem": "5 andere" },
    ];


    self.getSattellist = function() {
        var text = '';
        for (var i in self.liste) {
            text += getHtml(self.liste[i]);
        }
        return text;
    }


    getHtml = function(bundle) {
        var text = '<div class="product-wrapper" onclick="sattel.buy(\'' + escape(JSON.stringify(bundle)) + '\')" class="product">'
             + '<img src="images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             + '<div class="glockeZumBezug"><img src="images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" /></div>'
             + '</div>\n';
        return text;
    }


    self.buy = function(bundle) {
        if(bundle) {
            global.selected = JSON.parse(unescape(bundle));
        }
        else {  // buttons in form are pressed
        }
        var pic = '<img src="images/sattelbezug-large/Sattelbezug-' + global.selected.Sattel + '.jpg" />';
        document.getElementById("pic").innerHTML = pic;
        document.getElementById("ArtikelNr").value = global.selected.Sattel;
        document.getElementById("glockeNr").value = "";
        // document.getElementById("preis").value = self.preis;
        // document.getElementById("preisVersand").value = self.preisVersand;
        // document.getElementById("preisTotal").value = self.preisTotal;
        document.getElementById("email_template").value = "https://gegegech.github.io/web/mail/template-email-invoice.html";
        // document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/template-email-customer.html";
        document.getElementById("template_antwort").value = "https://gegegech.github.io/web/mail/template-page-success.html";
        document.getElementById("template_fehler").value = "https://gegegech.github.io/web/mail/template-page-success.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSattel').addClass('selected');
        $('.form').removeClass('hidden');

        document.getElementById("orderform").action = "https://www.formular-chef.de/fc.cgi";
        document.getElementById("SP").value = 'g' + global.selected.Sattel + 'sxp';
        document.getElementById("referer").value = "gegege.ch";
        document.getElementById("absender").value = "info@gegege.ch";
        // document.getElementById("_absender_feldname").value = "Email_SPF_save";
        document.getElementById("empfaenger").value = "info@gegege.ch,ansgar.john@swupp.ch";  // gets updated again in checkOrder()
    }

    self.hide = function() {
         $('.form').addClass('hidden');
    }

    self.checkOrder = function(){
        // Storing Field Values In Variables
        var Vorname = document.getElementById("Vorname").value;
        var Nachname = document.getElementById("Nachname").value;
        var Strasse = document.getElementById("Strasse").value;
        var PLZ = document.getElementById("PLZ").value;
        var Ort = document.getElementById("Ort").value;
        var Email = document.getElementById("Email").value;
        // Regular Expression For Email from http://emailregex.com/
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var plzReg = /^[0-9]{4,5}$/;
        // Conditions
        var error = [];
        if (Vorname == '') { error.push("Vorname"); }
        if (Nachname == '') { error.push("Nachname"); }
        if (Strasse == '') { error.push("Strasse"); }
        if (PLZ == '') { error.push("PLZ"); }
        if (Ort == '') { error.push("Ort"); }
        if (Email == '') { error.push("Email"); }
        if (error.length > 0) {
            alert("Bitte ergänzen Sie die folgenden Angaben: " + error.join(", "));
            return false;
        }
        if (! PLZ.match(plzReg)) {
            alert("Bitte geben Sie eine gültige Postleitzahl ein.");
            return false;
        }
        if (! Email.match(emailReg)) {
            alert("Bitte geben Sie eine gültige Email-Adresse ein.");
            return false;
        }
        document.getElementById("empfaenger").value = "info@gegege.ch,ansgar.john@swupp.ch," + document.getElementById("Email").value;
        return true;
    }

    return self;
}();


document.getElementById("sattelliste").innerHTML = sattel.getSattellist();
$(".preis").html(sattel.preis);


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!(iOS)) {
    $('.products').addClass('pc');
}

/* HTML
<div id="sattelfotos"></div>
*/
