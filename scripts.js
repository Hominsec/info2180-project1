window.addEventListener('load',()=>{
    let form=document.querySelector("form");
    let email=document.querySelector("#email");
    let message=document.querySelector(".message");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        let useremail=email.value.trim();

        if(useremail===""){
            message.innerHTML="Please enter a valid email address.";
        }
        else{
            message.innerHTML='Thank you! Your email address '+useremail+' has been added to out mailing list!';

        }
    });
});