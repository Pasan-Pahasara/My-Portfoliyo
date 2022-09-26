/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/


let buttons = document.querySelectorAll('.number');
let result = document.querySelector('#result');
let clear = document.querySelector('#clearBtn');
let history = document.querySelector('#history');
let equalTo = document.querySelector('#equalsBtn');


let value = "";

buttons.forEach((num, index) => {
    num.addEventListener('click', function () {
        let text = this.innerHTML;
        value += text;
        result.innerHTML = value;
    });
});

/*equal to button action*/
equalTo.addEventListener('click', function () {
    if (result.innerHTML !== "") {
        history.innerHTML = result.innerHTML;
        result.innerHTML = eval(result.innerHTML);
        value = eval(result.innerHTML);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter Any Number!',
        })
    }
});

/*clear all number*/
clear.addEventListener('click', function () {
    result.innerHTML = "";
    history.innerHTML = "";
    value = "";
});
