var orderStatus = new function() {
    var self = this;
    
    self.showSuccess = function() {
        $('#orderSuccess').removeClass('hidden');
    }

    self.showFail = function() {
        $('#orderFail').removeClass('hidden');
    }

    self.hide = function() {
        $('#orderSuccess').addClass('hidden');
        $('#orderFail').addClass('hidden');
    }
}


function fillData() {
    window.freshEmailTemplate = $("#orderSuccess").html();

    var replaced = $("#orderSuccess").html()
    .replace('##Vorname##', $("#firstName").val())
    .replace('##Nachname##', $("#lastName").val())
    .replace('##Strasse##', $("#street").val())
    .replace('##PLZ##', $("#PLZ").val())
    .replace('##Ort##', $("#place").val())
    .replace('##Email##', $("#Email").val())
    .replace('##DATUM##, ##UHRZEIT##', moment().format('DD.MM.YYYY, HH:mm:ss'))
    .replace('##ID##', $("#id").val())
    .replace('##ArtikelNr##', $("#itemNr").val())
    .replace('##glockeNr##', $("#bellNr").val())
    .replace('##Bemerkungen##', $("#remarks").val());
    $("#orderSuccess").html(replaced);

    if($("#template").val() == "template-email-invoice") {
        $("#saddleImage").attr("src", "https://gegegech.github.io/web/images/sattelbezug-small/Sattelbezug-"+$("#itemNr").val()+".jpg");
        $("#bellImage").attr("src", "");
        $("#itemPrice").html("CHF <s>25.00</s> 21.75");
        $("#shippingFees").html("CHF 3.00");
        $("#totalPrice").html("CHF <s>28.00</s> 24.75");
        $("#bellRow").hide();
        $("#saddleRow").show();
    }
    if($("#template").val() == "template-glocke-email-invoice") {
        $("#bellImage").attr("src", "https://gegegech.github.io/web/images/glocke-small/Veloglocke-"+$("#bellNr").val()+".jpg");
        $("#saddleImage").attr("src", "");
        $("#itemPrice").html("CHF <s>14.00</s> 12.00");
        $("#shippingFees").html("CHF 10.00");
        $("#totalPrice").html("CHF <s>24.00</s> 22.00");
        $("#saddleRow").hide();
        $("#bellRow").show();
    }
    if($("#template").val() == "template-set-email-invoice") {
        $("#saddleImage").attr("src", "https://gegegech.github.io/web/images/sattelbezug-small/Sattelbezug-"+$("#itemNr").val()+".jpg");
        $("#bellImage").attr("src", "https://gegegech.github.io/web/images/glocke-small/Veloglocke-"+$("#bellNr").val()+".jpg");
        $("#itemPrice").html("CHF <s>35.00</s> 30.00");
        $("#shippingFees").html("CHF 10.00");
        $("#totalPrice").html("CHF <s>45.00</s> 40.00");
        $("#saddleRow").show();
        $("#bellRow").show();
    }
}


$( "#orderform" ).submit(function( event ) {
    event.preventDefault();
    if (sattel.checkOrder()) {
    $.ajax({
    type: "POST",
    url: "https://gegege-backend.herokuapp.com/order",
    data: $("#orderform").serialize(),
    success: function(){
        // console.log(d);
        $('#buyForm').addClass('hidden');
        orderStatus.showSuccess();
        sattel.makeClickable();
        $("#orderSuccess").show();
    },
    error: function(d) {
        // console.log("error...");
        console.log(d);
        $('#buyForm').addClass('hidden');
        orderStatus.showFail();
        sattel.makeClickable();
    }
    });
    }
});
