var SetSattelGlocke = new function() {

    var self = this;

    self.preis = '35.-';
    self.preisVersand = '9.-';
    self.preisTotal = '44.-';


    self.buy = function(bundle) {
        if(bundle) {
            global.selected = JSON.parse(unescape(bundle));
        }
        else {  // buttons in form are pressed
        }
        var pic = '<img src="images/sattelbezug-large/Sattelbezug-' + global.selected.Sattel + '.jpg" />'
                + '<div class="glockeZumBezug"><img src="images/glocke-small/Veloglocke-' + global.selected.Glocke + '.jpg" /></div>'
        ;
        document.getElementById("pic").innerHTML = pic;
        document.getElementById("ArtikelNr").value = global.selected.Sattel;
        document.getElementById("glockeNr").value = global.selected.Glocke;
        // document.getElementById("preis").value = self.preis;
        // document.getElementById("preisVersand").value = self.preisVersand;
        // document.getElementById("preisTotal").value = self.preisTotal;
        document.getElementById("email_template").value = "https://gegegech.github.io/web/mail/templateSet-email-invoice.html";
        document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/templateSet-email-customer.html";
        document.getElementById("template_antwort").value = "https://gegegech.github.io/web/mail/templateSet-page-success.html";
        document.getElementById("template_fehler").value = "https://gegegech.github.io/web/mail/templateSet-page-success.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSetSattelGlocke').addClass('selected');
        $('.form').removeClass('hidden');

        document.getElementById("orderform").action = "http://www.formular-chef.de/fc.cgi";
        document.getElementById("SP").value = 'g' + global.selected.Sattel + 'sxp';
        document.getElementById("referer").value = "gegege.ch";
        document.getElementById("absender").value = "info@gegege.ch";
        document.getElementById("_absender_feldname").value = "Email";
        document.getElementById("empfaenger").value = "info@gegege.ch,ansgar.john@swupp.ch";
    }

/*
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
*/

    return self;
}();
