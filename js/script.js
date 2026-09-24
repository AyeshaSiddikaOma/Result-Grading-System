let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let result = document.querySelector('#rsl')

btn.addEventListener('click',(event)=>{
event.preventDefault
console.log(input.value)

check()
})

function check(){
    
if(isNaN(input.value) ){
result.innerHTML = `<span>Please Enter A Valid Number</span>`
result.style.color = "pink"
    input.value = "";


}
else if(input.value <= 0 ||  input.value >100  ){
 result.innerHTML = `<span>Please Enter A Number Between 1 and 100</span>`
result.style.color = "pink"
    input.value = "";


}

else if(input.value >=1  && input.value < 33 ){
 result.innerHTML = `<span> Unfortunately, You Failed. Don't Give Up — Keep Trying! 💪 </span>`
result.style.color = "red"
    input.value = "";


}


else if(input.value >= 33 && input.value <40 ){
 result.innerHTML = `<span> You Got D Grade</span>`
result.style.color = "coral"
    input.value = "";


}

else if(input.value >= 40 && input.value <50 ){
 result.innerHTML = `<span> You Got C Grade</span>`
result.style.color = "yellow"
    input.value = "";


}

else if(input.value >= 50 && input.value <60 ){
 result.innerHTML = `<span> You Got B Grade</span>`
result.style.color = "rgb(192, 205, 50)"
    input.value = "";


}

else if(input.value >= 60 && input.value <70 ){
 result.innerHTML = `<span> You Got A- </span>`
result.style.color = "yellow"
    input.value = "";


}

else if(input.value >=70 && input.value <80 ){
 result.innerHTML = `<span> Your Got A Grade </span>`
result.style.color = "rgb(171, 247, 56)"
    input.value = "";


}

else if(input.value >=80 && input.value  <= 100 ){
 result.innerHTML = `<span>  Congratulation! Your Got A+  </span>`
result.style.color = "lightgreen"
    input.value = "";


}

}