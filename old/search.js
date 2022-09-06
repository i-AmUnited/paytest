// JavaScript code
function search_staff() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('staff');
    let msg = document.getElementById('exist');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            // msg.textContent="Payvantage does not have a team member named" + ' ' + input ;
        }
        else {
            x[i].style.display="list-item";
        }
    }
}