var glocke = new function() {

    var self = this;

    self.preis = '14.-';
    self.preisVersand = '9.-';
    self.preisTotal = '23.-';

    /*
        Liste aller Glockebilder. Die Bilder müssen im Namensformat 'Glockebezug-038.jpg' vorliegen.
    */
    self.liste = [
"006",	//	1	pimp my bike
// "001",	//	1	rosa
"002",	//	1	rosa
// "003",	//	1	rosa
// "004",	//	1	rosa
// "005",	//	1	rosa
"007",	//	1	rosa
"043",	//	1	rosa
"045",	//	1	rosa
// "047",	//	1	rosa
"049",	//	1	rosa
// "011",	//	2	rot
"013",	//	2	rot
"038",	//	2	rot
"040",	//	2	rot
"059",	//	3	grün
"015",	//	3	grün
"016",	//	3	grün
"054",	//	3	grün
// "019",	//	3	grün
// "020",	//	4	blau
// "021",	//	4	blau
// "022",	//	4	blau
"023",	//	4	blau
// "024",	//	4	blau
"027",	//	4	blau
"029",	//	4	blau
"030",	//	4	blau
"044",	//	1	blau
// "031",	//	5	andere  (wenn vorne "//" steht, kommt dieser Sattel nicht mehr auf der Webseite)
"032",	//	5	andere
"033",	//	5	andere
"036",	//	5	andere
// "059",	//	5	andere
    ];


    self.getGlockelist = function() {
        var text = '';
        for (var i in self.liste) {
            text += getHtml(self.liste[i]);
        }
        return text;
    }


    getHtml = function(ipad) {
        var text = '<div class="product-wrapper" onclick="glocke.buy(\'' + ipad + '\')" class="product">'
             + '<img src="images/glocke-small/Veloglocke-' + ipad + '.jpg" />'
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             // + (sattel.liste.indexOf(ipad) > -1) ? '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + MATCH + '</div>'
             //   : '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + self.preis + '</div>'
             + '</div>\n';
        return text;
    }


    self.buy = function(str) {
        str = str || document.getElementById("ArtikelNr").value;  // if ArtikelNr is not set (this is the case if buttons in form are pressed), read it from the form
        var pic = '<img src="images/glocke-small/Veloglocke-' + str + '.jpg" />';
        document.getElementById("pic").innerHTML = pic;
        document.getElementById("ArtikelNr").value = str;
        document.getElementById("glockeNr").value = "";
        // document.getElementById("preis").value = self.preis;
        // document.getElementById("preisVersand").value = self.preisVersand;
        // document.getElementById("preisTotal").value = self.preisTotal;
        document.getElementById("email_template").value = "https://gegegech.github.io/web/mail/templateGlocke-email-invoice.html";
        document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/templateGlocke-email-customer.html";
        document.getElementById("template_antwort").value = "https://gegegech.github.io/web/mail/templateGlocke-page-success.html";
        document.getElementById("template_fehler").value = "https://gegegech.github.io/web/mail/templateGlocke-page-success.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionGlocke').addClass('selected');
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


document.getElementById("glockeliste").innerHTML = glocke.getGlockelist();
$(".preisGlocke").html(glocke.preis);


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!(iOS)) {
    $('.products').addClass('pc');
}

/* HTML
<div id="glockefotos"></div>
*/