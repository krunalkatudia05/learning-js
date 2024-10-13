
const buttons = document.querySelectorAll('.customClass');
const bodyElement= document.querySelector('body');

buttons.forEach( (button) => {

    //console.log(button);
    // button.addEventListener('click',(e) => {
    button.addEventListener('click',(e) => {
        switch(e.target.id)
        {
            case "blue":
                bodyElement.style.backgroundColor = e.target.id;
                break;
            case "blueviolet":
                bodyElement.style.backgroundColor = e.target.id;
                break;
            case "grey":
                bodyElement.style.backgroundColor = e.target.id;
                break;
            case "lightblue":
                bodyElement.style.backgroundColor = e.target.id;
                break;
            default :
                bodyElement.style.backgroundColor = "pink";
                break;
        }
        // if()
        
    });
})

// console.log(buttons);
// console.log(bodyElement);
