let total = 0;

$(document).ready(readyNow);

function readyNow(){
   $('.inputField').append('<input type ="text" id="firstName" placeholder="First Name"></input> ');
   $('.inputField').append('<input type ="text" id="lastName" placeholder="Last Name"></input> ');
   $('.inputField').append('<input type ="number" id="idNumber" placeholder="ID Number"></input> ');  // pushes all the input feilds to html
   $('.inputField').append('<input type ="text" id="jobTitle" placeholder="Job Title"></input> ');
   $('.inputField').append('<input type ="number" id="annualSalary" placeholder="Annual Salary"></input> ');
   $('.inputField').append('<button id="submit">Submit</button>'); // pushes Submit button to html
   $('.monthlyTotal').append('<h3>Monthly Total: $<span id="tCounter"><span></h3>');  // pushes Monthly total and a span to display the changing monthly total
  addInput(); // runs on click function
}
function addInput() {   
        $('#submit').on('click',function(){
        let fName = $('#firstName').val();
        let lName = $('#lastName').val(); // gave all the values a name to push them eaiser
        let iD = Number($('#idNumber').val());
        let title = $('#jobTitle').val();
        let salary = Number($('#annualSalary').val());
        $('tbody').append('<tr><td>'+fName+'</td><td>'+lName+'</td><td>'+iD+'</td><td>'+title+'</td><td>'+salary+'</td><td><button class="deleteRow">Delete</button></td></tr>');
        monthlyTotal(); // displays the updated monthly total before the value gets emptied
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val(''); //resets the input feilds
        $('#jobTitle').val('');
        $('#annualSalary').val('');
        dButton(); // function to clear the information rows
    });       
};
function monthlyTotal() {
    newTotal = Number($('#annualSalary').val()) / 12; // divides by 12 to get the monthly salary
    total += newTotal // add it to the total variable
    $('#tCounter').empty(); // emptys the display
    $('#tCounter').append(Math.round(total)); // pushes updated total to the display
    if (total >= 20000) {
        $('h3').css('background-color', 'red'); // turns red once the monthly expenses
    }  
};

function dButton () {
    $('.deleteRow').on('click', function(){
        const el = event.target;
        $(el).parent().parent().remove(); // removes the row the botton is on
    })
};
