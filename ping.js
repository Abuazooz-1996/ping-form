let press=document.querySelector(".press")
let inp=document.querySelector(".email input")
let par=document.querySelector(".er")



press.addEventListener("click",()=>{
    if(inp.value.trim()==""){
        par.classList.add("on")
        inp.classList.add("red")
    }
    else{
        par.classList.remove("on")
        inp.classList.remove("red")
    }
})