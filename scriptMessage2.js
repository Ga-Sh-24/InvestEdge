
let modalshow=document.querySelector(".modal1");
let blurred=document.querySelector(".blurred");
let redir=document.querySelector(".redir");

redir.addEventListener('click', (event)=>{
    blurred.style.opacity=1;
    modalshow.style.display="none";
})


