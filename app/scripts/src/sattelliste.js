var preis = '25.-';


var sattel = function() {

    var self = this;


    /*
        Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
    */
    self.liste = [
        "038",  // rot Schweizerkreuze
        // "00X",  // Beispiel: wenn vorne "//" steht, kommt dieser Sattel nicht mehr auf der Webseite
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009",
        "010",
        "011",
        "012",
        "013",
        "014",
        "015",
        "016",
        "017",
        "018",
        "019",
        "020",
        "021",
        "022",
        "023",
        "024",
        "025",
        "026",
        "027",
        "028",
        "029",
        "030",
        "031",
        "032",
        "033",
        "034",
        "035",  // schwarz
        "036",  // schwarz-weiss Scherenschnitt
        "037",
        "039",
        "040",
        "041",
        "042",
        "043",
        "044",
        "045",
        "046",
        "047",
        "048"
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
             + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + preis + '</div>'
             + '</div>\n';
        return text;
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
$(".preis").html(preis);


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!(iOS)) {
    $('.products').addClass('pc');
}

/* HTML
<div id="sattelfotos"></div>
*/
