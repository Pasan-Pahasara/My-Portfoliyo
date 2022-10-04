/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

let items = [];
//add new item
$("#newItem").click(function () {
    let itemID = $("#item-id").val();
    let itemName = $("#item-name").val();
    let itemPrice = $("#item-price").val();
    let itemQuantity = $("#item-quantity").val();

    let itemObject = {
        id: itemID,
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    items.push(itemObject);
    //item saved alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Item has been saved',
        showConfirmButton: false,
        timer: 1500
    })
    loadAllItems();
    dblRowClickEvents();
});

//load all items function
function loadAllItems() {
    $("#tblItem").empty();

    // get all item records from the array
    for (var item of items) {
        var row = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;
        $("#tblItem").append(row);
    }
}

//double clicked delete function
function dblRowClickEvents() {
    $("#tblItem>tr").on('dblclick', function () {
        $(this).remove(); //select the row which runs the event at the moment and then delete it
    });
}

//regex patterns
let regItemCode = /^(I00-)[0-9]{3,4}$/;
let regItemName = /^[A-z ]{3,20}$/;
let regItemPrice = /^[0-9]{1,10}$/;
let regItemQtyOnHand = /^[0-9]{1,3}$/;