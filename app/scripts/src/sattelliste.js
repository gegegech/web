var sattel = new function() {

    var self = this;

    self.preis = '25.-';
    self.preisVersand = '2.-';
    self.preisTotal = '27.-';

    /*
        Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
    */
    self.liste = [
// "001",	//	1	rosa
"002",	//	1	rosa
// "003",	//	1	rosa
// "004",	//	1	rosa
// "005",	//	1	rosa
"006",	//	1	rosa
"007",	//	1	rosa
// "008",	//	1	rosa
"043",	//	1	rosa
// "072",	//	1	rosa
"086",	//	1	rosa
// "073",	//	1	rosa
"087",	//	1	rosa
"045",	//	1	rosa
// "047",	//	1	rosa
"049",	//	1	rosa
"053",	//	1	rosa
"058",	//	1	rosa
// "064",	//	1	rosa
"078",	//	1	rosa
"075",	//	1	rosa
"009",	//	2	rot
// "010",	//	2	rot
// "011",	//	2	rot
"012",	//	2	rot
"013",	//	2	rot
"014",	//	2	rot
"038",	//	2	rot
"040",	//	2	rot
"041",	//	2	rot
// "065",	//	2	rot
"079",	//	2	rot
// "071",	//	2	rot
"085",	//	2	rot
// "070",	//	3	grün
"084",	//	3	grün
"059",	//	3	grün
"015",	//	3	grün
"016",	//	3	grün
"017",	//	3	grün
"018",	//	3	grün
"054",	//	3	grün
// "063",	//	3	grün
"077",	//	3	grün
// "066",	//	3	grün
"080",	//	3	grün
// "067",	//	3	grün
"081",	//	3	grün
// "068",	//	3	grün
"082",	//	3	grün
"039",	//	3	grün
"046",	//	3	grün
// "020",	//	4	blau
// "021",	//	4	blau
// "022",	//	4	blau
"023",	//	4	blau
// "024",	//	4	blau
"025",	//	4	blau
"026",	//	4	blau
"027",	//	4	blau
"028",	//	4	blau
"029",	//	4	blau
"030",	//	4	blau
"037",	//	4	blau
"044",	//	1	blau
"048",	//	4	blau
"050",	//	4	blau
"055",	//	4	blau
"056",	//	4	blau
"057",	//	4	blau
"061",	//	4	blau
// "031",	//	5	andere  (wenn vorne "//" steht, kommt dieser Sattel nicht mehr auf der Webseite)
"032",	//	5	andere
"033",	//	5	andere
"034",	//	5	andere
"035",	//	5	andere
"036",	//	5	andere
"051",	//	5	andere
"062",	//	5	andere
"052",	//	5	andere
"042",	//	5	andere
"074",	//	5	andere
"076",	//	5	andere
// "059",	//	5	andere
    ];


    self.getSattellist = function() {
        var text = '';
        for (var i in self.liste) {
            text += getHtml(self.liste[i]);
        }
        return text;
    }


    getHtml = function(ipad) {
        var text = '<div class="product-wrapper" onclick="sattel.buy(\'' + ipad + '\')" class="product">'
             + '<img src="images/sattelbezug-small/Sattelbezug-' + ipad + '.jpg" />'
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             + ((glocke.liste.indexOf(ipad) == -1)
                ? '<div class="glockeZumBezug"><img src="images/glocke-small/Veloglocke-006.jpg" /></div>'
                : '<div class="glockeZumBezug"><img src="images/glocke-small/Veloglocke-' + ipad + '.jpg" /></div>')
             + '</div>\n';
        return text;
    }


    self.buy = function(str) {
        str = str || document.getElementById("ArtikelNr").value;  // if ArtikelNr is not set (this is the case if buttons in form are pressed), read it from the form
        var pic = '<img src="images/sattelbezug-small/Sattelbezug-' + str + '.jpg" />';
        document.getElementById("pic").innerHTML = pic;
        document.getElementById("ArtikelNr").value = str;
        document.getElementById("glockeNr").value = "";
        // document.getElementById("preis").value = self.preis;
        // document.getElementById("preisVersand").value = self.preisVersand;
        // document.getElementById("preisTotal").value = self.preisTotal;
        document.getElementById("email_template").value = "https://gegegech.github.io/web/mail/template-email-invoice.html";
        document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/template-email-customer.html";
        document.getElementById("template_antwort").value = "https://gegegech.github.io/web/mail/template-page-success.html";
        document.getElementById("template_fehler").value = "https://gegegech.github.io/web/mail/template-page-success.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSattel').addClass('selected');
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
