var global = { selected: { sattel: "", glocke: ""} };


var sattel = new function() {

    var self = this;

    self.preis = '<s>25.-</s> 21.75';
    self.preisVersand = '3.-';
    self.preisTotal = '<s>28.-</s> 24.75';
    self.gekauft = false;

        // Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
        self.liste = listeSattelGlobal;


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
