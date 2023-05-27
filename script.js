let display =document.getElementById("show");
let btn=document.querySelectorAll(".btn");
let btnArray=Array.from(btn);
let str="";
btnArray.forEach(element => {
    element.addEventListener('click',(evt)=>
    {
        if(evt.target.value==="=")
        {
           str = ""
            str = eval(display.value);
            display.value=str;
        }
        else if(evt.target.value==="Del")
        {
            let currentVal = "";
            for(let i=0; i<display.value.length-1; i++) {
                currentVal += display.value[i];
            }
            display.value = currentVal;
        }
        else{
        display.value+=evt.target.value;
        }
    })
});