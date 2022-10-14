/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/
let tableRow = [];

// generate orderID
function generateOrderID() {
    value = "ORD-0001";
    $("#btnPlaceOrder").click(function () {
        const newValue = value.split('-');
        let increase = newValue[1];
        increase++;
        value = "ORD-" + increase;

        $("#orderId").val(value);
    });
}

// get date
function setCurrentDate() {
    let currentDate = $("#orderDate").val();
}

//--------------------------------------------//
<!-- Start Customer Details Combo -->
//--------------------------------------------//
// load ids'
function loadAllCustomersForOption() {
    $("#cusId").empty();
    for (let customer of customers) {
        $("#cusId").append(`<option>${customer.id}</option>`);
    }
}

// set customers Details
$("#cusId").click(function () {
    let find = customers.find(({id}) => id === $("#cusId").val());
    $("#cusName").val(find.name);
    $("#cusAddress").val(find.address);
    $("#cusSalary").val(find.salary);
});
//--------------------------------------------//
<!-- Ended Customer Details Combo -->
//--------------------------------------------//

//--------------------------------------------//
<!-- Start Item Details Combo -->
//--------------------------------------------//
// load ids'
function loadAllItemsForOption() {
    $("#cmbCode").empty();
    for (let item of items) {
        $("#cmbCode").append(`<option>${item.id}</option>`);
    }
}

// set items Details
$("#cmbCode").click(function () {
    let find = items.find(({id}) => id === $("#cmbCode").val());
    $("#iName").val(find.name);
    $("#iPrice").val(find.price);
    $("#iQtyOnHand").val(find.quantity);
});
//--------------------------------------------//
<!-- Ended Item Details Combo -->
//--------------------------------------------//

// global variables names
let itemCode;
let itemName;
let itemPrice;
let itemQty;
let itemOrderQty;

let total = 0;
let discount = 0;
let subTotal = 0;

//--------------------------------------------//
<!-- Start Cart Details -->
//--------------------------------------------//
// add to cart button
$("#btnAddCart").on('click', function () {
    // duplicate false
    let duplicate = false;
    for (let i = 0; i < $("#tableAddCart tr").length; i++) {
        if ($("#cmbCode option:selected").text() === $("#tableAddCart tr").children(':nth-child(1)')[i].innerText) {
            duplicate = true;
        }
    }

    if (duplicate !== true) {
        loadAddCartTable();
        countingDownQty($("#buyQty").val());
        calcTotal($("#buyQty").val() * $("#iPrice").val());
    } else if (duplicate === true) {

        manageQtyOnHand(tableRow.children(':nth-child(4)').text(), $("#buyQty").val());
        $(tableRow).children(':nth-child(4)').text($("#buyQty").val());

        manageTotal(tableRow.children(':nth-child(5)').text(), $("#buyQty").val() * $("#iPrice").val());
        $(tableRow).children(':nth-child(5)').text($("#buyQty").val() * $("#iPrice").val());
    }

    // click table row and set values to text fields
    $("#tableAddCart>tr").click('click', function () {
        tableRow = $(this);
        let itemCode = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let unitPrice = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();
        let total = $(this).children(":eq(4)").text();

        $("#cmbCode").val(itemCode);
        $("#iName").val(itemName);
        $("#iPrice").val(unitPrice);
        $("#buyQty").val(qty);
        $("#lblTotal").val(total);
    });
});

// load cart details to the table
$("#tableAddCart").empty();

function loadAddCartTable() {
    itemCode = $("#cmbCode").val();
    itemName = $("#iName").val();
    itemPrice = $("#iPrice").val();
    itemQty = $("#iQtyOnHand").val();
    itemOrderQty = $("#buyQty").val();

    let total = itemPrice * itemOrderQty;
    let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemOrderQty}</td><td>${total}</td></tr>`;

    $("#tableAddCart").append(row);
}

// counting order qty hand after buy
function countingDownQty(orderQty) {
    let minQty = parseInt(orderQty);
    let reduceQty = parseInt($("#iQtyOnHand").val());
    reduceQty = reduceQty - minQty;
    $("#iQtyOnHand").val(reduceQty);
}

// calculate total
function calcTotal(number) {
    total += number;
    $("#lblTotal").val("RS:" + total + "/=");
}

// manage qtyOnHand function
function manageQtyOnHand(preQty, nowQty) {
    var preQty = parseInt(preQty);
    var nowQty = parseInt(nowQty);
    let avaQty = parseInt($("#iQtyOnHand").val());

    avaQty = avaQty + preQty;
    avaQty = avaQty - nowQty;

    $("#iQtyOnHand").val(avaQty);
}

// manage total function
function manageTotal(preTotal, nowTotal) {
    total -= preTotal;
    total += nowTotal;

    $("#lblTotal").val(total);
}
//--------------------------------------------//
<!-- Ended Cart Details -->
//--------------------------------------------//

// discount added and calculate total
$(document).on("change keyup blur", "#discount", function () {
    discount = $("#discount").val();
    discount = (total / 100) * discount;
    subTotal = total - discount;

    $("#subTotal").val(subTotal);
});

// added cash and check balance
$(document).on("change keyup blur", "#cash", function () {
    let cash = $("#cash").val();
    let balance = cash - subTotal;
    $("#balance").val(balance);
    if (balance < 0) {
        $("#lblCheckSubtotal").parent().children('strong').text(balance+" : plz enter valid Balance");
        $("#btnPlaceOrder").attr('disabled', true);
    } else {
        $("#lblCheckSubtotal").parent().children('strong').text("");
        $("#btnPlaceOrder").attr('disabled', false);
    }
});

// place order function
function pushOrderDetails() {
    for (let i = 0; i < $("#tableAddCart tr").length; i++) {
        let orderId = $("#orderId").val();
        let cusId = $("#cmbCode").val();
        let itemId = $("#tableAddCart tr").children(':nth-child(1)')[i].innerText;
        let qty = $("#tableAddCart tr").children(':nth-child(4)')[i].innerText;
        let total = $("#tableAddCart tr").children(':nth-child(5)')[i].innerText;

        let orderDetailObject = {
            orderId: orderId,
            cusId: cusId,
            itemId: itemId,
            qty: qty,
            total:total
        };
        orderDetails.push(orderDetailObject);
        console.log(orderDetailObject);
    }
}
