var global = { selected: { sattel: "", glocke: ""} };


var sattel = new function() {

    var self = this;

    self.preis = '25.-';
    self.preisVersand = '3.-';
    self.preisTotal = '28.-';
    self.gekauft = false;

        // Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
        self.liste = [
        { "Sattel": "8465", "Glocke": "8562", "Bem": "1 rosa" },
        { "Sattel": "8429", "Glocke": "8561", "Bem": "1 rosa" },
        { "Sattel": "8463", "Glocke": "8559", "Bem": "1 rosa" },
        { "Sattel": "8462", "Glocke": "8558", "Bem": "1 rosa" },
        { "Sattel": "8461", "Glocke": "8557", "Bem": "1 rosa" },
        { "Sattel": "8460", "Glocke": "8547", "Bem": "1 rosa" },
        { "Sattel": "8459", "Glocke": "8560", "Bem": "1 rosa" },
        { "Sattel": "8428", "Glocke": "8547", "Bem": "2 rot" },
        { "Sattel": "8449", "Glocke": "8548", "Bem": "2 rot" },
        { "Sattel": "8457", "Glocke": "8556", "Bem": "2 rot" },
        { "Sattel": "8456", "Glocke": "8555", "Bem": "2 rot" },
        { "Sattel": "8455", "Glocke": "8554", "Bem": "2 rot" },
        { "Sattel": "8453", "Glocke": "8552", "Bem": "3 andere" },
        { "Sattel": "8454", "Glocke": "8553", "Bem": "3 andere" },
        { "Sattel": "8452", "Glocke": "8551", "Bem": "3 andere" },
        { "Sattel": "8451", "Glocke": "8550", "Bem": "3 andere" },
        { "Sattel": "8450", "Glocke": "8549", "Bem": "3 andere" },
        { "Sattel": "8447", "Glocke": "8546", "Bem": "3 andere" },
        { "Sattel": "8446", "Glocke": "8545", "Bem": "3 andere" },
        { "Sattel": "8445", "Glocke": "8544", "Bem": "3 grün" },
        { "Sattel": "8444", "Glocke": "8543", "Bem": "3 grün" },
        { "Sattel": "8443", "Glocke": "8542", "Bem": "3 grün" },
        { "Sattel": "8442", "Glocke": "8541", "Bem": "3 grün" },
        { "Sattel": "8441", "Glocke": "8540", "Bem": "4 blau" },
        { "Sattel": "8440", "Glocke": "8539", "Bem": "4 blau" },
        { "Sattel": "8439", "Glocke": "8538", "Bem": "4 blau" },
        { "Sattel": "8438", "Glocke": "8537", "Bem": "4 blau" },
        { "Sattel": "8437", "Glocke": "8536", "Bem": "4 blau" },
        { "Sattel": "8435", "Glocke": "8534", "Bem": "4 blau" },
        { "Sattel": "8436", "Glocke": "8535", "Bem": "4 blau" },
        { "Sattel": "8434", "Glocke": "8533", "Bem": "5 andere" },
        { "Sattel": "8433", "Glocke": "8532", "Bem": "5 andere" },
        { "Sattel": "8432", "Glocke": "8530", "Bem": "5 andere" },
        { "Sattel": "8431", "Glocke": "8531", "Bem": "5 andere" }
    ];


    self.getSattellist = function() {
        var text = '';
        for (var i in self.liste) {
            text += getHtml(self.liste[i]);
        }
        return text;
    }


    getHtml = function(bundle) {
        var text = '<div class="product-wrapper" onclick="selector.showSelection(\'' + escape(JSON.stringify(bundle)) + '\')" class="product">'
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
        document.getElementById("itemNr").value = global.selected.Sattel;
        document.getElementById("bellNr").value = "";
        document.getElementById("template").value = "template-email-invoice";
        // document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/template-email-customer.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSattel').addClass('selected');
        $('#buyForm').removeClass('hidden');
        $.get("https://gegege-backend.herokuapp.com/wake");

        document.getElementById("id").value = '#' + Math.random().toString(36).substr(2, 6);
    }

    self.hide = function() {
         $('#buyForm').addClass('hidden');
    }


    self.makeUnclickable = function() {  // Kann nicht 2 mal gesendet werden + laden... text
        self.gekauft = true;
        $("input:submit").prop("value", "laden...");
    }

    self.makeClickable = function() {  // Kann wieder geclickt werden
        self.gekauft = false;
        $("input:submit").prop("value", "Senden");
    }


    self.checkOrder = function(){
        if (self.gekauft) {
            return false;
        }
        else {
            // Storing Field Values In Variables
            var Vorname = document.getElementById("firstName").value;
            var Nachname = document.getElementById("lastName").value;
            var Strasse = document.getElementById("street").value;
            var PLZ = document.getElementById("PLZ").value;
            var Ort = document.getElementById("place").value;
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
            self.makeUnclickable();
            fillData();
            return true;
        }
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
