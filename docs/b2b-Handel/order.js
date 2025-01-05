collectOrder = function() {
    var orderedItems = {}

    for (var i in createList.list) {
        if (document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"sattel").value > 0) {
            orderedItems[JSON.stringify(createList.list[i])+"1"] = document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"sattel").value;
        }

        if (document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"glocke").value > 0) {
            orderedItems[JSON.stringify(createList.list[i])+"2"] = document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"glocke").value;
        }

        if (document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"set").value > 0) {
            orderedItems[JSON.stringify(createList.list[i])+"3"] = document.getElementById(encodeURIComponent(JSON.stringify(createList.list[i]))+"set").value;
        }

        if (document.getElementById("packaging").value > 0) {
            orderedItems["packaging4"] = document.getElementById("packaging").value;
        }
    }
    return orderedItems;
}


displayOrder = function() {
    var orderedItems = collectOrder();
    if (Object.keys(orderedItems).length == 0) return;
    var html = "<div class='formBackground' onclick='hideOrder();'></div><div class='container'><table><tr><th>Artikel</th><th>Menge</th><th>Preis</th></tr>";
    var totalPrice = 0;
    for (var i in orderedItems) {
        var snippet = '<tr><td><div class="orderedItem">';

        var type = i[i.length-1];

        var bundle;
        try {
        var bundle = JSON.parse(i.slice(0,-1));
        }
        catch(err) {
        }

        var amount = orderedItems[i];

        var priceForThisItem;

        if (type == 1) {
            snippet += '<img class="itemImage" src="https://gegege.ch/images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />';
            priceForThisItem = priceSaddle;
        }
        if (type == 2) {
            snippet += '<img class="itemImage" src="https://gegege.ch/images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />';
            priceForThisItem = priceBell;
        }
        if (type == 3) {
            snippet += '<img class="itemImage" src="https://gegege.ch/images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" />'
                + '<img class="itemImageSmall" src="https://gegege.ch/images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" />';
            priceForThisItem = priceSaddle + priceBell;
        }
        if (type == 4) {
            snippet += '<img class="itemImage" src="https://gegege.ch/images/packaging/packaging.jpg" />';
            priceForThisItem = pricePackaging;
        }

        snippet += '</div></td>';

        snippet += '<td><p>'+amount+'</p></td>';

        totalPrice += priceForThisItem*amount;
        snippet += '<td><p>'+priceForThisItem*amount+'.-</p></td>';

        snippet += '</tr>\n';


        html += snippet;
    }
    if (totalPrice < 225) return;
    html += '<tr><td></td><td>Versand:</td><td>' + 10 + '.-</td></tr>';
    totalPrice+=10;
    html += '<tr><td></td><td>Total:</td><td>' + totalPrice + '.-</td></tr>';
    html += '<tr><td></td><td></td><td>' + '<p id="confirmOrderButton" onclick="buy();">Weiter</p>' + '</td></tr>';
    html += "</table>";

    html += '<i class="close fa fa-times" aria-hidden="true" onclick="hideOrder();"></i></div>';

    document.getElementById("confirmOrderForm").innerHTML = html;
    document.getElementById("confirmOrderForm").style.display = "block";
}


hideOrder = function() {
    document.getElementById("confirmOrderForm").style.display = "none";
}

buy = function() {
    hideOrder();

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

    document.getElementById("preisBuyForm").innerHTML = totalPrice;
    document.getElementById("id").value = '#' + Math.random().toString(36).substr(2, 6);


    document.getElementById("buyForm").style.display = "block";
}

hideBuy = function() {
    document.getElementById("buyForm").style.display = "none";
}



$( "#buyForm" ).submit(function( event ) {
    event.preventDefault();

    document.getElementById("buy").value = "laden...";
    
    requestObj = {}

    requestObj.firstname = $("#firstName").val();
    requestObj.lastname = $("#lastName").val();
    requestObj.street = $("#street").val();
    requestObj.zipcode = $("#PLZ").val();
    requestObj.place = $("#place").val();
    requestObj.email = $("#Email").val();
    requestObj.remarks = $("#remarks").val();
    requestObj.id = $("#id").val();

    requestObj.items = [];

    var orderedItems = collectOrder();

    if (Object.keys(orderedItems).length == 0) return;
    var totalPriceWithShipping = 10;
    for (var i in orderedItems) {
        var type = i[i.length-1];
        var bundle = JSON.parse(i.slice(0,-1));
        var amount = orderedItems[i];
        
        var priceForThisItem;
        var name;
        var image;
        var num;
        if (type == 1) {
            name = "Sattelbezug";
            image = '<img src="https://gegege.ch/images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" width="100" height="100" style="width:100px; float:right;"/>';
            num = bundle.Sattel;
            priceForThisItem = priceSaddle;
        }
        if (type == 2) {
            name = "Veloglocke";
            image = '<img src="https://gegege.ch/images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" width="100" height="100" style="width:100px; float:right;"/>';
            num = bundle.Glocke;
            priceForThisItem = priceBell;
        }
        if (type == 3) {
            name = "Set";
            image = '<img src="https://gegege.ch/images/sattelbezug-small/Sattelbezug-' + bundle.Sattel + '.jpg" width="100" height="100" style="width:100px; float:right;"/>' + '<img src="https://gegege.ch/images/glocke-small/Veloglocke-' + bundle.Glocke + '.jpg" width="100" height="100" style="width:100px; float:right;"/>';
            num = bundle.Sattel;
            priceForThisItem = priceSaddle + priceBell;
        }
        if (type == 4) {
            name = "Verpackung";
            image = '<img src="https://gegege.ch/images/packaging/packaging.jpg" width="100" height="100" style="width:100px; float:right;"/>';
            num = "";
            priceForThisItem = pricePackaging;
        }

        priceForThisItem *= amount;

        totalPriceWithShipping += priceForThisItem;

        requestObj.items.push({
            type: name,
            image: image,
            number: num,
            price: priceForThisItem,
            amount: amount
        });
    }

    requestObj.total = totalPriceWithShipping;

    var requestForm = new FormData();

    for ( var key in requestObj ) {
        if (key == "items") requestForm.append(key, JSON.stringify(requestObj[key]));
        else requestForm.append(key, requestObj[key]);
    }

    $.ajax({
        type: "POST",
        // url: "https://gegege-backend.herokuapp.com/orderBig",
        url: "https://gegege-backend.herokuapp.com/orderBig",
        data: new URLSearchParams(requestForm).toString(),
        success: function(){
            hideBuy();
            document.getElementById("Thankyou").style.display = "block";
            document.getElementById("buy").value = "Senden";
        },
        error: function(d) {
            alert("Something went wrong... Please contact us at info@gegege.ch!");
            document.getElementById("buy").value = "Senden";
        }
    });
});


hideThankyou = function() {
    document.getElementById("Thankyou").style.display = "none";
}