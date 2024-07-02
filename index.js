let input =document.querySelector('#input')
let button =document.querySelectorAll('button')


button.forEach(element => {
    element.addEventListener('click',function(e){
        if(e.target.textContent === "C"){
        input.textContent = ""
    }
    else if(e.target.textContent === "<="){

        input.innerText = input.innerText.slice(0,-1)

    }
    else if(e.target.textContent === "="){

        input.innerText = eval(input.innerText)
    }
    else{
        input.innerText = input.innerText+ e.target.textContent
    }
    input.scrollLeft = input.scrollWidth
console.log(e.target.textContent)
    })
    
});