// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// var order  = {}

var createList = new function() {

    var self = this;

    self.list = [
        // Liste aller Artikel. Die Bilder müssen im Namensformat 'Sattelbezug-038.jpg' bzw 'Veloglocke-038.jpg' vorliegen.
        // { "Sattel": "002", "Glocke": "002", "Bem": "1 rosa" },
        // { "Sattel": "006", "Glocke": "006", "Bem": "1 rosa" },
        // { "Sattel": "092", "Glocke": "006", "Bem": "1 rosa" },
        // { "Sattel": "007", "Glocke": "086", "Bem": "1 rosa" },
        // { "Sattel": "043", "Glocke": "043", "Bem": "1 rosa" },
        // { "Sattel": "086", "Glocke": "086", "Bem": "1 rosa" },
        { "Sattel": "087", "Glocke": "064", "Bem": "1 rosa" },
        // { "Sattel": "045", "Glocke": "045", "Bem": "1 rosa" },
        { "Sattel": "049", "Glocke": "049", "Bem": "1 rosa" },
        // { "Sattel": "053", "Glocke": "0112", "Bem": "1 rosa" },
        { "Sattel": "058", "Glocke": "0100", "Bem": "1 rosa" },
        { "Sattel": "078", "Glocke": "099", "Bem": "1 rosa" },
        { "Sattel": "075", "Glocke": "067", "Bem": "1 rosa" },
        { "Sattel": "0106", "Glocke": "0107", "Bem": "1 rosa" },
        { "Sattel": "0110", "Glocke": "0117", "Bem": "1 rosa" },
        { "Sattel": "0104", "Glocke": "0108", "Bem": "2 rot" },
        // { "Sattel": "009", "Glocke": "006", "Bem": "2 rot" },
        // { "Sattel": "012", "Glocke": "006", "Bem": "2 rot" },
        // { "Sattel": "013", "Glocke": "013", "Bem": "2 rot" },
        { "Sattel": "097", "Glocke": "097", "Bem": "2 rot" },
        { "Sattel": "0115", "Glocke": "0124", "Bem": "2 rot" },
        { "Sattel": "0116", "Glocke": "0123", "Bem": "2 rot" },
        // { "Sattel": "014", "Glocke": "006", "Bem": "2 rot" },
        // { "Sattel": "091", "Glocke": "0104", "Bem": "2 rot" },
        { "Sattel": "038", "Glocke": "038", "Bem": "2 rot" },
        // { "Sattel": "040", "Glocke": "040", "Bem": "2 rot" },
        { "Sattel": "0117", "Glocke": "0125", "Bem": "3 andere" },
        { "Sattel": "0118", "Glocke": "0122", "Bem": "3 andere" },
        { "Sattel": "0109", "Glocke": "0119", "Bem": "3 grün" },
         // { "Sattel": "041", "Glocke": "041", "Bem": "2 rot" },
        // { "Sattel": "079", "Glocke": "006", "Bem": "2 rot" },
        // { "Sattel": "085", "Glocke": "063", "Bem": "2 rot" },
        { "Sattel": "0103", "Glocke": "0102", "Bem": "3 grün" },
        // { "Sattel": "093", "Glocke": "093", "Bem": "5 andere" },
        // { "Sattel": "090", "Glocke": "0104", "Bem": "3 grün" },
        // { "Sattel": "084", "Glocke": "062", "Bem": "3 grün" },
        // { "Sattel": "059", "Glocke": "059", "Bem": "3 grün" },
        // { "Sattel": "015", "Glocke": "060", "Bem": "3 grün" },
        // { "Sattel": "016", "Glocke": "016", "Bem": "3 grün" },
        { "Sattel": "096", "Glocke": "096", "Bem": "3 grün" },
        { "Sattel": "094", "Glocke": "094", "Bem": "3 grün" },
        // { "Sattel": "017", "Glocke": "006", "Bem": "3 grün" },
        { "Sattel": "0112", "Glocke": "0118", "Bem": "3 grün" },
        { "Sattel": "0122", "Glocke": "069", "Bem": "3 grün" },
        // { "Sattel": "054", "Glocke": "054", "Bem": "3 grün" },
        // { "Sattel": "077", "Glocke": "065", "Bem": "3 grün" },
        // { "Sattel": "080", "Glocke": "006", "Bem": "3 grün" },
        // { "Sattel": "081", "Glocke": "068", "Bem": "3 grün" },
        // { "Sattel": "082", "Glocke": "068", "Bem": "3 grün" },
        // { "Sattel": "039", "Glocke": "0110", "Bem": "3 grün" },
        // { "Sattel": "046", "Glocke": "006", "Bem": "3 grün" },
        { "Sattel": "098", "Glocke": "0105", "Bem": "3 grün" },
        { "Sattel": "0105", "Glocke": "0106", "Bem": "3 grün" },
        // { "Sattel": "023", "Glocke": "023", "Bem": "4 blau" },
        // { "Sattel": "025", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "026", "Glocke": "0113", "Bem": "4 blau" },
        { "Sattel": "0108", "Glocke": "0121", "Bem": "4 blau" },
        { "Sattel": "0120", "Glocke": "0127", "Bem": "4 blau" },
        { "Sattel": "0121", "Glocke": "0126", "Bem": "4 blau" },
        // { "Sattel": "027", "Glocke": "027", "Bem": "4 blau" },
        // { "Sattel": "028", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "029", "Glocke": "029", "Bem": "4 blau" },
        // { "Sattel": "030", "Glocke": "0103", "Bem": "4 blau" },
        { "Sattel": "037", "Glocke": "037", "Bem": "4 blau" },
        // { "Sattel": "044", "Glocke": "0120", "Bem": "1 blau" },
        // { "Sattel": "048", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "050", "Glocke": "0111", "Bem": "4 blau" },
        // { "Sattel": "055", "Glocke": "0101", "Bem": "4 blau" },
        // { "Sattel": "0101", "Glocke": "0109", "Bem": "4 blau" },
        { "Sattel": "0102", "Glocke": "0109", "Bem": "4 blau" },
        // { "Sattel": "056", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "057", "Glocke": "006", "Bem": "4 blau" },
        // { "Sattel": "061", "Glocke": "026", "Bem": "4 blau" },
        // { "Sattel": "089", "Glocke": "089", "Bem": "4 blau" },
        // { "Sattel": "032", "Glocke": "032", "Bem": "5 andere" },
        // { "Sattel": "033", "Glocke": "033", "Bem": "5 andere" },
        { "Sattel": "034", "Glocke": "0114", "Bem": "5 andere" },
        { "Sattel": "0111", "Glocke": "0116", "Bem": "5 andere" },
        // { "Sattel": "035", "Glocke": "006", "Bem": "5 andere" },
        // { "Sattel": "036", "Glocke": "036", "Bem": "5 andere" },
        // { "Sattel": "051", "Glocke": "051", "Bem": "5 andere" },
        { "Sattel": "0107", "Glocke": "051", "Bem": "5 andere" },
        { "Sattel": "062", "Glocke": "0115", "Bem": "5 andere" },
        // { "Sattel": "052", "Glocke": "051", "Bem": "5 andere" },
        // { "Sattel": "042", "Glocke": "006", "Bem": "5 andere" },
        { "Sattel": "074", "Glocke": "074", "Bem": "5 andere" },
        { "Sattel": "093", "Glocke": "093", "Bem": "5 andere" },
        // { "Sattel": "059", "Glocke": "059", "Bem": "3 grün" },
        { "Sattel": "076", "Glocke": "006", "Bem": "5 andere" },
        // { "Sattel": "0100", "Glocke": "032", "Bem": "5 andere" },
    ];


    self.createList = function() {
        var html = '<div id="priceTitle" class="bundle">'
        + '<div>'
        + '<p id="priceSaddle"></p>'
        + '</div>'
        + '<div>'
        + '<p id="priceBell"></p>'
        + '</div>'
        + '<div  style="display:none;">'
        + '<p>22.-</p>'
        + '</div>'
        + '</div>\n';
        for (var i in self.list) {
            html += getHtmlForOneBundle(self.list[i]);
        }
        return html;
    }

    getHtmlForOneBundle = function(bundle) {
        var html = '<div class="bundle">'
             + '<div>'
             + '<img class="itemImage" src="../images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "sattel" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '<div>'
             + '<img class="itemImage" src="../images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "glocke" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '<div style="display:none;">'
             + '<img class="itemImage" src="../images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
             + '<img class="itemImageSmall" src="../images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />'
             + '<input id="' + encodeURIComponent(JSON.stringify(bundle)) + "set" + '" type="number" min="0" value="0" class="count" onchange="computePrice();"></input>'
             + '</div>'
             + '</div>\n';
        return html;
    }

    return self;
}();


document.getElementById("articles").innerHTML = createList.createList();

