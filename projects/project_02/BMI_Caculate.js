//const bmi = (weight / ((height * height) / 10000)).toFixed(2);

document.addEventListener('submit',(e) => {
    e.preventDefault(); // prevents the default behaviour of submit form.
    const txt_height = document.querySelector('#height').value;
    const txt_weight = document.querySelector('#weight').value;
    const remarks = document.querySelector('#Error_Msg');
    let bmi = 0 ;
    if(txt_height === undefined || txt_height === null || txt_height === '' || isNaN(txt_height))
    {
        remarks.style.color = "red";
        remarks.innerHTML = "please enter valid Height";
    }
    else if(txt_weight === undefined || txt_weight === null || txt_weight === '' || isNaN(txt_weight))
    {
        remarks.style.color = "red";
        remarks.innerHTML = "please enter valid Weight";       
    }
    else
    {
         bmi = (txt_weight / ((txt_height * txt_height) / 10000)).toFixed(2);
         remarks.innerHTML = `Your BMI is ${bmi}`;
    }

    //console.log('txt_height ' + txt_height + ' txt_weight ' + txt_weight);
});