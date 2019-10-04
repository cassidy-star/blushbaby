// soo basically  im creating a function for my content tthat will be on my catalogue
function product(name, priceOfdresses) {
    this.name = name;
    this.price = priceOfdresses;
}
// Here im giving each a value and key and to make it simple i just changed each items numberm
let dress1 = new product("dress1", 2000);
let dress2 = new product("dress2", 3600);
let dress3 = new product("dress3", 4000);
let dress4 = new product("dress4", 3690);
let dress5 = new product("dress5", 1300);
let dress6 = new product("dress6", 6560);
let dress7 = new product("dress7", 3000);
let dress8 = new product("dress8", 2400);
sessionStorage.setItem("catalogue", JSON.stringify([dress1, dress2, dress3, dress4, dress5, dress6, dress7, dress8]));
// Here im basically storing my info in my local storage so that it will be saved somewhere
var overall = parseInt(localStorage.getItem("Overall"));
if (!overall) {
    overall = 0
    var unit = [];
    localStorage.setItem("Unit1", JSON.stringify(unit));
} else {
    var unit = JSON.parse(localStorage.getItem("Unit1"));

};

localStorage.setItem("Overall", overall);

if (!unit) {}
// Here i had to add an alert for each time someone clicks buy 
function toCart1() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[0]]
    } else {
        y.push(x[0])
    };

    localStorage.setItem("Unit1", JSON.stringify(y));
// i also made it that it gets added awhen more then one dresss gets bought so the localstorage keeps track of that
    localStorage.setItem("Overall", z += x[0].price);
    alert("your total amount of the dress is R" + z);
};



function toCart2() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[1]];
    } else {
        y.push(x[1]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[1].price);
    alert("your total amount of the dress is R" + z);
};

function toCart3() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[2]];
    } else {
        y.push(x[2]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[2].price);
    alert("your total amount of the dress is R" + z);
};

function toCart4() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[3]];
    } else {
        y.push(x[3]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[3].price);
    alert("your total amount of the dress is R" + z);
};


function toCart5() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[4]];
    } else {
        y.push(x[4]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[4].price);
    alert("your total amount of the dress is R" + z);
};


function toCart6() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[5]];
    } else {
        y.push(x[5]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[5].price);
    alert("your total amount of the dress is R" + z);
};


function toCart7() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[6]];
    } else {
        y.push(x[6]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[6].price);
    alert("your total amount of the dress is R" + z);
};


function toCart8() {
    var x = JSON.parse(sessionStorage.getItem("catalogue"));
    var y = JSON.parse(localStorage.getItem("Unit1"));
    var z = parseInt(localStorage.getItem("Overall"));

    if (y == null) {
        y = [x[7]];
    } else {
        y.push(x[7]);
    };

    localStorage.setItem("Unit1", JSON.stringify(y));

    localStorage.setItem("Overall", z += x[7].price);
    alert("your total amount of the dress is R" + z);
};
// Here i have my drop down for my buy page 
$("#col1").hide();
$("#col2").hide();
// so i set my dropdown time to two seconds
$(function() {
    $("#first").click(function() {
        $("#col1").slideToggle(2000)
    })
});

$(function() {
    $("#sec").click(function() {
        $("#col2").slideToggle(2000)
    })
});

var last = parseInt(localStorage.getItem("Overall"));
// this function basically added on to your total based on which type of delivery you choose
let selector = null;
$("#devOrcol1").click(function() {
    if (selector != null) {
        if (selector == false) {
            localStorage.setItem("Overall", last += 80);
            alert("Your total of your order is now R" + last)
            selector = true;
        };

    } else if (selector == null) {
        localStorage.setItem("Overall", last += 80)
        alert("Your total of your order is now R" + last)
        selector = true
    };
});

$("#devOrcol2").click(function() {
    if (selector != null) {
        if (selector == false) {
            localStorage.setItem("Overall", last -= 50);
            alert("Your total of your order is now R" + last)
            selector = true;
        };

    } else if (selector == null) {
        localStorage.setItem("Overall", last += 50)
        alert("Your total of your order is now R" + last)
        selector = true
    };
});



function confirm() {
    var bottle = parseInt(localStorage.getItem("Overall"));
    var wine = JSON.parse(localStorage.getItem("Unit1"));
// This basically resets the total bak to zero 
    localStorage.setItem("Overall", 0)
    localStorage.setItem("Unit1", JSON.stringify([]));

    var m = (Math.random() * 0xFFFFFF << 0).toString(9)
    alert("Your reference number for your order is " + m)
};
// Above i basically just gave a reference number 





