const thankYou = document.getElementById("show-rating");

thankYou.textContent="Thank you"

const submitBtn = document.getElementById("submit");

function trigger(){ 
    document.getElementById("bc-1").style.display= "block";
}
submitBtn.addEventListener('click',trigger)



function ratingNum1(){
ratingSt.style.background= "hsl(25, 97%, 53%)";
ratingSt.style.color="#fff"
const ratingValue =ratingSt.value;
thankYou.textContent=`You selected 1 out of 5`

}

const ratingSt = document.querySelector(".rating-1");
ratingSt.addEventListener("click",ratingNum1);
function ratingNum2(){
    
    ratingSt2.style.background= "hsl(25, 97%, 53%)";
    ratingSt2.style.color="#fff"
    ratingSt.style.background= "hsl(216, 12%, 54%)";
    ratingSt.style.color="#fff"
    const ratingValue =ratingSt.value;
    thankYou.textContent=`You selected 2 out of 5`
    
    }
    
    const ratingSt2 = document.querySelector(".rating-2");
    ratingSt2.addEventListener("click",ratingNum2);


``
function ratingNum3(){
    
    ratingSt3.style.background= "hsl(25, 97%, 53%)";
    ratingSt3.style.color="#fff"
    ratingSt2.style.background= "hsl(216, 12%, 54%)";
    ratingSt2.style.color="#fff"
    const ratingValue =ratingSt.value;
    thankYou.textContent=`You selected 3 out of 5`
    
    }
    
    const ratingSt3 = document.querySelector(".rating-3");
    ratingSt3.addEventListener("click",ratingNum3);


    function ratingNum4(){
        
        ratingSt4.style.background= "hsl(25, 97%, 53%)";
        ratingSt4.style.color="#fff"
        ratingSt3.style.background= "hsl(216, 12%, 54%)";
        ratingSt3.style.color="#fff"
        const ratingValue =ratingSt.value;``
        thankYou.textContent=`You selected 4 out of 5`
        
        }
        
        const ratingSt4 = document.querySelector(".rating-4");
        ratingSt4.addEventListener("click",ratingNum4);


        function ratingNum5(){
            
            ratingSt5.style.background= "hsl(25, 97%, 53%)";
            ratingSt4.style.background= "hsl(216, 12%, 54%)";
            ratingSt4.style.color="#fff"
            ratingSt5.style.color="#fff"
            const ratingValue =ratingSt.value;
            thankYou.textContent=`You selected 5 out of 5`
            
            }
            
            const ratingSt5 = document.querySelector(".rating-5");
            ratingSt5.addEventListener("click",ratingNum5);


