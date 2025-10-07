async function LoginPage(){
    
    let form = document.createElement("form");
    let usernameInput = document.createElement("input");
    let passwordInput = document.createElement("input");
    let submitButton = document.createElement("input");
    let signUp = document.createElement("button");

    usernameInput.setAttribute("type","text");
    passwordInput.setAttribute("type","password");
    submitButton.setAttribute("type","submit");

    submitButton.addEventListener("click",async function (e){
        e.preventDefault();

        // to do make backend to verfie codes
    });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    form.appendChild(signUp);

}


async function GetData(){

}

async function Main(){
    //to do set up checking cookies
    if(logedin === true){
        
    }else{
        LoginPage();
    }
}