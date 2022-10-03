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

//regex patterns
let regCusID = /^(C00-)[0-9]{3,4}$/;
let regCusName = /^[A-z ]{3,20}$/;
let regCusAddress = /^[A-z0-9/ ]{6,30}$/;
let regCusSalary = /[0-9]{100}$/;

//text fields focus and regex
$("#customer-id").on('keyup', function (event) {
    let input = $("#customer-id").val();

    if (regCusID.test(input)) {
        $("#customer-id").css('border', '2px solid green');
        $("#error").text("");

        if (event.key === 'Enter') {
            $("#customer-name").focus();
        }
    }else {
        $("#customer-id").css('border', '2px solid red');
        $("#error").text("Wrong format: C00-001");
    }
});

$("#customer-name").on('keyup', function (event) {
    let input =$("#customer-name").val();
    if(regCusName.test(input)) {
        $("#customer-name").css('border', '2px solid green');
        $("#error").text("");

        if (event.key === 'Enter') {
            $("#customer-address").focus();
        }
    }else {
        $("#customer-name").css('border','2px solid red')
        $("#error").text("Wrong format: Pahasara");
    }
});

$("#customer-address").on('keyup', function (event) {
    let input =$("#customer-address").val();
    if(regCusAddress.test(input)){
        $("#customer-address").css('border','2px solid green');
        $("#error").text("");
        if (event.key === 'Enter') {
            $("#customer-salary").focus();
        }
    }else {
        $("#customer-address").css('border','2px solid red');
        $("#error").text("Wrong format: 256/b Galle");
    }
});

$("#customer-salary").on('keyup', function (event) {
    let input=$("#customer-salary").val();
    if(regCusSalary.test(input)) {
        $("#customer-salary").css('border', '2px solid green');
        $("#error").text("");
        if (event.key === 'Enter') {
            $("#newCustomer").focus();
        }
    }else {
        $("#customer-salary").css('border','2px solid red')
        $("#error").text("Wrong format: Rs.10000.00");
    }
});

//disable tab key focus
$("#customer-id,#customer-name,#customer-address,#customer-salary").on('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});

//clear text fields
function clearTextFields() {
    $('#customer-id').val('');
    $('#customer-name').val('');
    $('#customer-address').val('');
    $('#customer-salary').val('');
    $('#customer-id').focus();
}



