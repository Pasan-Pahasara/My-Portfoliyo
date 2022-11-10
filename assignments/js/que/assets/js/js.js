/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

var queId = -1;

let persons = [{name: 'Pahasara', color: "#1337C9"}, {name: 'Nimesh', color: 'red'}, {
    name: 'Maneesha', color: 'orange'
}];

$(function () {
    renderQueue();
    queId = setInterval(renderQueue, 1000);
});

function renderQueue() {
    $('#container').empty();

    for (let i = 0; i < persons.length; i++) {
        $('#container').append(`<div style="background-color: ${persons[i].color}"><h1 style="font-weight: 600; font-size: 20px;">${persons[i].name}</h1></div>`);
    }

    persons.unshift(persons.pop());
}

$('#btnAdd').on('click', function () {
    persons.push({name: $('#txtName').val(), color: $('#txtColor').val()});
});

$('#btnStart').on('click', function () {
    clearInterval(queId);
    queId = setInterval(renderQueue, 1000);
});

$('#btnStop').click(function () {
    clearInterval(queId);
});