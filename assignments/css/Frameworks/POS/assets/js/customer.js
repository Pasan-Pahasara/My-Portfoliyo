/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

let customers = [];

//stating focus customerID
$("#customerID").focus();

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
    clearAllTexts();
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
let regCusSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

//customer validation array
let customerValidations = [];

customerValidations.push({
    reg: regCusID,
    field: $('#customer-id'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidations.push({
    reg: regCusName,
    field: $('#customer-name'),
    error: 'Customer Name Pattern is Wrong : A-z 5-20'
});
customerValidations.push({
    reg: regCusAddress,
    field: $('#customer-address'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: regCusSalary,
    field: $('#customer-salary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

//disable tab key of all four text fields using grouping selector in CSS
$("#customer-id,#customer-name,#customer-address,#customer-salary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

//grouping all fields keyup event using and call check validity function
$("#customer-id,#customer-name,#customer-address,#customer-salary").on('keyup', function (event) {
    checkValidity();
});

//grouping all fields blur event using and call check validity function
$("#customer-id,#customer-name,#customer-address,#customer-salary").on('blur', function (event) {
    checkValidity();
});

//customer-id focus event
$("#customer-id").on('keydown', function (event) {
    if (event.key == "Enter" && check(regCusID, $("#customer-id"))) {
        $("#customer-name").focus();
    } else {
        focusText($("#customer-id"));
    }
});

//customer-name focus event
$("#customer-name").on('keydown', function (event) {
    if (event.key == "Enter" && check(regCusName, $("#customer-name"))) {
        focusText($("#customer-address"));
    }
});

//customer-address focus event
$("#customer-address").on('keydown', function (event) {
    if (event.key == "Enter" && check(regCusAddress, $("#customer-address"))) {
        focusText($("#customer-salary"));
    }
});

//customer-salary focus event
$("#customer-salary").on('keydown', function (event) {
    if (event.key == "Enter" && check(regCusSalary, $("#customer-salary"))) {
        $("#newCustomer").focus();
    }
});

//add customer modal clear button
$("#clearCustomer").on('click', function () {
   clearAllTexts();
});

//check validity function
function checkValidity() {
    let errorCount = 0;
    for (let validation of customerValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}

//check regex pattern function
function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

//error text fields function
function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('small').text(error);
    }
}

//success text fields function
function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('small').text(error);
    }
}

//default text fields function
function defaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('small').text(error);
}

//focus texts function
function focusText(txtField) {
    txtField.focus();
}

//button state function
function setButtonState(value) {
    if (value > 0) {
        $("#newCustomer").attr('disabled', true);
    } else {
        $("#newCustomer").attr('disabled', false);
    }
}

//clear text fields function
function clearAllTexts() {
    $("#customer-id").focus();
    $("#customer-id,#customer-name,#customer-address,#customer-salary").val("");
    checkValidity();
}

//search id and load table
$("#btnCustomerSearch").click(function () {
    var searchCusID = customers.find(({id}) => id === $("#customerSearchBar").val());

    $("#tblCustomer").empty();

    // get all customer records from the array
    var row = `<tr><td>${searchCusID.id}</td><td>${searchCusID.name}</td><td>${searchCusID.address}</td><td>${searchCusID.salary}</td></tr>`;
    $("#tblCustomer").append(row);
});

