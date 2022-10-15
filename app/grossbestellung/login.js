displayLogin = function() {
    document.getElementById("loginForm").style.display = "block";
}

hideLogin = function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("wrongPassword").style.display = "none";
}

login = function() {
    var requestData = new FormData();

    requestData.append("password", document.getElementById("password").value);

    $.ajax({
        type: "POST",
        url: "https://gegege-backend.herokuapp.com/getDealerPrices",
        data: new URLSearchParams(requestData).toString(),
        success: function(d){
            d = JSON.parse(d);
            priceSaddle = d.saddle;
            priceBell = d.bell;
            hideLogin();
            document.getElementById("priceSaddle").innerHTML = priceSaddle.toString() + ".-";
            document.getElementById("priceBell").innerHTML = priceBell.toString() + ".-";
            document.getElementById("loginButton").style.display = "none";
            document.getElementById("loggedInIcon").style.display = "block";
            computePrice();
        },
        error: function(d) {
            if (d.status == 401) {
                document.getElementById("wrongPassword").style.display = "block";
            }
            else {
                alert("Something went wrong... Please contact us at info@gegege.ch!");
            }
        }
    });
}