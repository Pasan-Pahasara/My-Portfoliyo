/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/
//
let customers = [];
//add new customer
$("#newCustomer").click(function () {
    let customerID = $("#customer-id").val();
    let customerName = $("#customer-name").val();
    let customerAddress = $("#customer-address").val();
    let customerSalary = $("#customer-salary").val();

    let customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    };
    customers.push(customerObject);
    //customer saved alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Customer has been saved',
        showConfirmButton: false,
        timer: 1500
    })
    loadAllCustomers();
    bindRowClickEvents();
    dblRowClickEvents();
});

//load all customers function
function loadAllCustomers() {
    $("#tblCustomer").empty();

    // get all customer records from the array
    for (var customer of customers) {
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomer").append(row);
    }
}

//setting all table records details values to text fields
function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        $('#customer-id').val(id);
        $('#customer-name').val(name);
        $('#customer-address').val(address);
        $('#customer-salary').val(salary);
    });
}

//double clicked delete function
function dblRowClickEvents() {
    $("#tblCustomer>tr").on('dblclick', function () {
        $(this).remove(); //select the row which runs the event at the moment and then delete it
    });
}

//text fields focus and regex
$("#customer-id").on('keyup', function (event) {
    if (event.key === 'Enter') {
        $("#customer-name").focus();
    }
});

$("#customer-name").on('keyup', function (event) {
    if (event.key === 'Enter') {
        $("#customer-address").focus();
    }
});

$("#customer-address").on('keyup', function (event) {
    if (event.key === 'Enter') {
        $("#customer-salary").focus();
    }
});

$("#customer-salary").on('keyup', function (event) {
    if (event.key === 'Enter') {
        $("#newCustomer").focus();
    }
});

//disable tab key focus
$("#customer-id,#customer-name,#customer-address,#customer-salary").on('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});



