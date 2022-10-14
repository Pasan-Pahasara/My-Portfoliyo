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
    $("#lblTotal").val("RS:"+total+"/=");
}
//--------------------------------------------//
<!-- Ended Cart Details -->
//--------------------------------------------//