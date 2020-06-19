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
        document.getElementById("itemNr").value = global.selected.Sattel;
        document.getElementById("bellNr").value = global.selected.Glocke;
        document.getElementById("template").value = "template-set-email-invoice";
        // document.getElementById("kopie_an_absender_template").value = "https://gegegech.github.io/web/mail/templateSet-email-customer.html";
        $("#preisOrderForm").html(self.preis);
        $("#preisOrderFormVersand").html(self.preisVersand);
        $('input.selectButton').removeClass('selected');
        $('input.selectionSetSattelGlocke').addClass('selected');
        $('#buyForm').removeClass('hidden');
        $.get("https://gegege-backend.herokuapp.com/wake");

        document.getElementById("id").value = '#' + Math.random().toString(36).substr(2, 6);
    }


    return self;
}();
