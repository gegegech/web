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
        // document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/templateSet-email-customer.html";
        document.getElementById("template_antwort").value = "https://gegegech.github.io/web/mail/templateSet-page-success.html";
        document.getElementById("template_fehler").value = "https://gegegech.github.io/web/mail/templateSet-page-success.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSetSattelGlocke').addClass('selected');
        $('#buyForm').removeClass('hidden');

        document.getElementById("orderform").action = "https://www.formular-chef.de/fc.cgi";
        document.getElementById("SP").value = 'g' + global.selected.Sattel + 'sxp';
        document.getElementById("referer").value = "gegege.ch";
        document.getElementById("absender").value = "info@gegege.ch";
        // document.getElementById("_absender_feldname").value = "Email_SPF_save";
        document.getElementById("empfaenger").value = "info@gegege.ch,ansgar.john@swupp.ch";  // gets updated again in checkOrder()
        document.getElementById("ID").value = '#' + Math.random().toString(36).substr(2, 6);
    }


    return self;
}();
