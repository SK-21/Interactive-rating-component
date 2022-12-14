const thankYou = document.getElementById("show-rating");

thankYou.textContent="Thank you"

const submitBtn = document.getElementById("submit");

function trigger(){ 
    document.getElementById("bc-1").style.display= "block";
}
submitBtn.addEventListener('click',trigger)



function ratingNum1(){
// let ratingNum1 = document.getElementsByClassName("rating-1");

ratingSt.style.background= "hsl(25, 97%, 53%)";
ratingSt.style.color="#fff"
const ratingValue =ratingSt.value;
thankYou.textContent=`You have got 1 out of 5`

}

const ratingSt = document.querySelector(".rating-1");
ratingSt.addEventListener("click",ratingNum1);
function ratingNum2(){
    // let ratingNum1 = document.getElementsByClassName("rating-1");
    
    ratingSt2.style.background= "hsl(25, 97%, 53%)";
    ratingSt2.style.color="#fff"
    const ratingValue =ratingSt.value;
    thankYou.textContent=`You have got 2 out of 5`
    
    }
    
    const ratingSt2 = document.querySelector(".rating-2");
    ratingSt2.addEventListener("click",ratingNum2);


``





// function ratingSelect(){
    
//     let ratingNum = document.getElementsByClassName("rating");

//     for(let i =0;i<ratingNum.length;i++){

//         ratingNum[i].style.background= "hsl(25, 97%, 53%)";
//         ratingNum[i].style.color="#fff"
    
//         thankYou.textContent="You have got 1 out of 5"
//         console.log(ratingNum[i])
//     }

   

// }

// const ratingSt = document.getElementsByClassName("rating");
// ratingSt.addEventListener("click",ratingSelect);



// let ratingValue = document.getElementById('we');
// let val = ratingValue.value;

// document.getElementById("show-rating").innerHTML=`You selected ${val} out of 5`;
   