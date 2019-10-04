var Total = parseInt(localStorage.getItem("Overall"));;
document.getElementById("itemAmount").append(Total);

var x = JSON.parse(localStorage.getItem("Unit1"));
var y = document.getElementById("myclothes");

x.forEach(function(e) {
    var z = document.createElement("tr");
    y.appendChild(z);

    var i = document.createElement("td");
    i.innerHTML = e.name + "   " + e.price;
    z.appendChild(i);


});
// Because i constantly save my stuff to my local storage i can just call it to be used again like at the bottom
var cheap = parseInt(localStorage.getItem("Overall"))
var coup = document.getElementById("CoupBtn")
coup.addEventListener("click", function() {
    localStorage.setItem("Overall", cheap - 25);
    alert("Thanks for buying by us you just got R25 off your first purchase ! Your total is now R" + cheap);

});
