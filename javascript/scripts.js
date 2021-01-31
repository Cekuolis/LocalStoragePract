let forma = document.forms[0];
let minusValue;
let value;
let array = [];
let suma;
var element = document.getElementById("sestas");
const history = document.getElementById("history-list")
let optionValue = "Add money";
let petr;
let li;
// isaugome skaicius i masyva jei add tai su + jei remove tai su -
value = (e) => {
  e.preventDefault();
  value = e.target.numberInput.value;
  if (document.getElementById("inputState").value === "Add money") {
    array.push(value);
    localStorage.setItem("money", JSON.stringify(array));

  } else {
    array.push(-value);
    localStorage.setItem("money", JSON.stringify(array));
  }
  petr = JSON.parse(localStorage.getItem("money"));

  let totalMoney = getArraySum(petr);
  element.innerHTML = totalMoney;

  function getArraySum(a) {
    var total = 0;
    for (var i in a) {
      total += parseInt(a[i]);
    }
    return total;
  }
   li = document.createElement('li');
  li.textContent = value;
  history.appendChild(li);

  if (document.getElementById("inputState").value === "Add money") {
    li.style.color = "green"
  } else {
    li.style.color = "red"
  }

};

function moneySort() {
  listRemove();
  let arrayInt = petrToIntArray(petr);

  arrayInt.sort();
 console.log(arrayInt)
 
 for(let i =0; i<arrayInt.length;i++){
  li = document.createElement("li")
   li.textContent= arrayInt[i]
   history.appendChild(li);

   if(array[i]>0){
    li.style.color="red";
   
   }else{
    li.style.color="green"
    
   }
  
 
 }


}

forma.addEventListener("submit", value);

//////////////////////////////////////////////////////////////////////////

/// spausdinimas i console local storage masyvas
console.log(JSON.parse(localStorage.getItem("money")));



function petrToIntArray(a) {
  var total = [];
  for (var i in a) {
    total.push(parseInt(a[i]));
  }
  return total;
}
function listRemove(){
  var lis = document.getElementById('history-list');
  lis.innerHTML = "";
}