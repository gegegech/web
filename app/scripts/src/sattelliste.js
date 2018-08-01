var preis = '25.-';


var sattel = function() {

    var self = this;


    /*
        Liste aller Sattelbilder. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' vorliegen.
    */
    self.liste = [
//"001",	//	1	rosa
"002",	//	1	rosa
// "003",	//	1	rosa
// "004",	//	1	rosa
// "005",	//	1	rosa
"006",	//	1	rosa
"007",	//	1	rosa
"008",	//	1	rosa
"043",	//	1	rosa
"044",	//	1	blau
"045",	//	1	rosa
//"047",	//	1	rosa
"049",	//	1	rosa
"053",	//	1	rosa
"058",	//	1	rosa
"009",	//	2	rot
"010",	//	2	rot
// "011",	//	2	rot
"012",	//	2	rot
"013",	//	2	rot
"014",	//	2	rot
"038",	//	2	rot
"040",	//	2	rot
"041",	//	2	rot
"059",	//	3	grün
"015",	//	3	grün
"016",	//	3	grün
"017",	//	3	grün
"018",	//	3	grün
"054",	//	3	grün
// "019",	//	3	grün
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
"052",	//	5	andere
"042",	//	5	andere
"059",	//	5	andere
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
