const baseUrl='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".To select");
const msg = document.querySelector(".msg");

// for(code in countryList){
//     console.log(code, countryList[code]);
// }


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected = "selected";
        }
        else if(select.name==="To" && currCode==="PKR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element) =>{
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};


btn.addEventListener("click", (evt)=>{
evt.preventDefault();
    UpdateExchangeRate();
});



const UpdateExchangeRate= async()=>{
    let amount= document.querySelector(".amount input");
let amountValue = amount.value;
if(amountValue=== "" || amountValue < 1){
    amountValue= 1;
    amount.value ="1";
    
}
// console.log(fromCurr.value, toCurr.value);
const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate =data[toCurr.value.toLowerCase()];
let finalValue = amountValue*rate;
msg.innerText=`${amountValue} ${fromCurr.value} = ${finalValue} ${toCurr.value}`;
// console.log();
}

window.addEventListener("load", ()=>{
UpdateExchangeRate();
});