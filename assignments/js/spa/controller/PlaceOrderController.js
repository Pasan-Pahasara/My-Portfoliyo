/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

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

const total = 0;
const discount = 0;
const subTotal = 0;

//--------------------------------------------//
<!-- Start Cart Details -->
//--------------------------------------------//
// add to cart button
$("#btnAddCart").on('click', function () {
    loadAddCartTable();
})

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