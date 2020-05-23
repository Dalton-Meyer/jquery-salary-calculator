let total = 0;

$(document).ready(readyNow);

function readyNow(){
   $('.inputField').append('<input type ="text" id="firstName" placeholder="First Name"></input> ');
   $('.inputField').append('<input type ="text" id="lastName" placeholder="Last Name"></input> ');
   $('.inputField').append('<input type ="number" id="idNumber" placeholder="ID Number"></input> ');
   $('.inputField').append('<input type ="text" id="jobTitle" placeholder="Job Title"></input> ');
   $('.inputField').append('<input type ="number" id="annualSalary" placeholder="Annual Salary"></input> ');
   $('.inputField').append('<button id="submit">Submit</button>');
   $('.monthlyTotal').append('<h3>Monthly Total:$<span id="tCounter"><span></h3>');  
  addInput();
}
function addInput() {   
        $('#submit').on('click',function(){
        let fName = $('#firstName').val();
        let lName = $('#lastName').val();
        let iD = Number($('#idNumber').val());
        let title = $('#jobTitle').val();
        let salary = Number($('#annualSalary').val());
        $('tbody').append('<tr><td>'+fName+'</td><td>'+lName+'</td><td>'+iD+'</td><td>'+title+'</td><td>'+salary+'</td><td><button class="deleteRow">Delete</button></td></tr>');
        monthlyTotal();
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
        dButton();
    });       
};
function monthlyTotal() {
    newTotal = Number($('#annualSalary').val()) / 12;
    total += newTotal
    $('#tCounter').empty();
    $('#tCounter').append(Math.round(total));
    if (total >= 20000) {
        $('h3').css('background-color', 'red');
    }  
};

function dButton () {
    $('.deleteRow').on('click', function(){
        const el = event.target;
        $(el).parent().parent().remove();

    })
};
