
let employees = {
    fname: 'fname',
    lname: 'lname',
    id: 'id',
    title: 'title',
    salary: 'salary'
};

$(document).ready(readyNow);

function readyNow(){
    layOut();

}

function layOut() {
   $('.inputField').append('<input type ="text" id="firstName" placeholder="First Name"></input> ');
   $('.inputField').append('<input type ="text" id="lastName" placeholder="Last Name"></input> ');
   $('.inputField').append('<input type ="number" id="idNumber" placeholder="ID Number"></input> ');
   $('.inputField').append('<input type ="text" id="jobTitle" placeholder="Job Title"></input> ');
   $('.inputField').append('<input type ="number" id="annualSalary" placeholder="Annual Salary"></input> ');
   $('.inputField').append('<button id="submit">Submit</button>');
}
function addInput() {
    
}