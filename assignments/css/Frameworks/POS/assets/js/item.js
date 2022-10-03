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
        address: itemPrice,
        salary: itemQuantity
    };
    items.push(itemObject);
});
