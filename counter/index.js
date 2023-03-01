const counterNumberEl = document.querySelector(".counter-number");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
let storeData = JSON.parse(localStorage.getItem("count"));
counterNumberEl.innerText = storeData.count;
let counter = storeData.count;
// if(>0);
increaseBtn.addEventListener("click",()=>{
 counter++;
 counterNumberEl.innerText = counter;
 updateLocalDatabase()
});

resetBtn.addEventListener("click",()=>{
    counter=0;
    counterNumberEl.innerText = counter;
    updateLocalDatabase();
})

decreaseBtn.addEventListener('click',()=>{
    if(counter>0)
     counter--;

     counterNumberEl.innerText = counter;
     updateLocalDatabase();
})

function updateLocalDatabase(){
   localStorage.setItem("count",JSON.stringify({count:counter}));   
}