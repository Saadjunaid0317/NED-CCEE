let a=document.getElementById("para")
// a.innerHTML="blue"
// a.style.fontSize='50px'
// a.style.color='red'
// console.log(a)
// let b=document.querySelector("button")
// b.innerHTML="push me"
// b.style.fontSize='20px'
// b.style.color='blue'
// console.log(b)
 const button = document.getElementById("button");
 button.disabled=true;
 document.getElementById("click").oninput=function(event){
     if (event.target.value === '') {
         button.disabled=true;
        }  
        else{
            button.disabled=false; 
            console.log("typeing is started",event.target.value)
        }
    }
    button.onclick = function(){
        alert("button clicked")
    }

