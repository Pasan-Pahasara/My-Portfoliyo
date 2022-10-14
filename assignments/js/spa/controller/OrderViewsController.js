/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

// load all orders functions
function loadAllOrders() {

    $("#tblOrder").empty();

    for (let order of orderDB) {
        let row = `<tr><td>${order.oId}</td><td>${order.cId}</td><td>${order.oDate}</td><td>${order.subTotal}</td><td>${order.discount}</td></tr>`;
        $("#tblOrder").append(row);
    }
}
