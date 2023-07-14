function showModal(value){
    let submit=document.getElementById("hid");
    let message=document.getElementById("message");
    if(value==true){
        message.innerText="Your concern has been submitted successfully!";
    }else{
        message.innerText="Some error occurred in submitting your concern...";
    }
    submit.style.display="block";
}

module.exports={showModal};