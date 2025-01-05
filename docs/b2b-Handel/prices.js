var priceSaddle = 0;
var priceBell = 0;
var pricePackaging = 1;
// var pricePackaging = 0;

computePrice = function() {
    var orderedItems = collectOrder();
    if (Object.keys(orderedItems).length == 0) return;
    var totalPrice = 0;
    for (var i in orderedItems) {
        var type = i[i.length-1];
        var amount = orderedItems[i];
        var priceForThisItem;

        if (type == 1) {
            priceForThisItem = priceSaddle;
        }
        if (type == 2) {
            priceForThisItem = priceBell;
        }
        if (type == 3) {
            priceForThisItem = priceSaddle + priceBell;
        }
        if (type == 4) {
            priceForThisItem = pricePackaging;
        }
        totalPrice += priceForThisItem*amount;
    }
    document.getElementById("currPrice").innerHTML = "Aktueller Preis: " + totalPrice + ".-";
}