var selector = new function() {
    var self = this;
    
    self.showSelection = function(bundle) {

        if(bundle) {
            global.selected = JSON.parse(unescape(bundle));
        }
        var picSattel = '<img src="images/sattelbezug-large/Sattelbezug-' + global.selected.Sattel + '.jpg" />';
        var picGlocke = '<img src="images/glocke-large/Veloglocke-' + global.selected.Glocke + '.jpg" />';
        var priceSattel = "25.-";
        var priceGlocke = "14.-";
        document.getElementById("picSattelbezug").innerHTML = picSattel + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + priceSattel + '</div>';
        document.getElementById("picGlocke").innerHTML = picGlocke + '<div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ' + priceGlocke + '</div>';
        $('#chooseProduct').removeClass('hidden');

    }

    self.hide = function() {
        $('#chooseProduct').addClass('hidden');
    }
}