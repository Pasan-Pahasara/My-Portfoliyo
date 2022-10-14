/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

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

// set items Details
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