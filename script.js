
const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener('click', function() {
    switch(button.value){
      case 'AC': display.value='';
                 break;
      case 'C' : display.value= display.value.slice(0,-1);
        break;

      case '=': display.value= eval(display.value);
        break;
      default:  
       display.value += button.value;
       break;
    }     
  });
});
document.getElementById('display').addEventListener('touchstart', function(event) {
    event.preventDefault();
});
