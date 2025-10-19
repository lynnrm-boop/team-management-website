async function LoginPage(){ // start of function
    
    let form = document.createElement("form");
    let usernameInput = document.createElement("input");
    let passwordInput = document.createElement("input");
    let submitButton = document.createElement("button");
    let signUp = document.createElement("button");

    usernameInput.setAttribute("type","text");
    passwordInput.setAttribute("type","password");

    submitButton.addEventListener("click",async function (e){
        

        // to do make backend to verfie codes
    });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    form.appendChild(signUp);
    document.getElementById("root").appendChild(form);

} //end of function

async function displayTask(taskData){ //start of function
    let task = document.createElement("div");

    
    return(task);
} //end of function

async function makeTask(){ //start of function

    let form = document.createElement("form");
    let taskNameInput = document.createElement("input");
    let taskGroupInput = document.createElement("input");
    let taskDueDateInput = document.createElement("input");
    let taskDiscriptionInput = document.createElement("input");
    let submitInput = document.createElement("button");

    form.style.display = "grid";
    form.style.width = "50%";
    form.style.height = "75%";
    form.style.gridTemplateRows = "20% 20% 20% 20% 20%";
    form.style.backgroundColor = "black";


    form.appendChild(taskNameInput);
    form.appendChild(taskGroupInput);
    form.appendChild(taskDueDateInput);
    form.appendChild(taskDiscriptionInput);
    form.appendChild(submitInput);

    submitInput.addEventListener("click",() => { // function start
        this.parentNode.appendChild(displayTask())
    } //function end
)
    //todo make this data send to backend

} // end of function

async function EditTask(task){ //start of function

} // end of function

function trackTime(){ //start of function

    // todo add track time code

} // end of function

async function GetData(){ //start of functon

    //todo connect backend

} // end of function

async function HomePage(Logdata){
    document.getElementById("root").innerHTML = "";

    let TaskDisplay = document.createElement("div");

    for(let i = 0; i < taskList.length; i++){
        TaskDisplay.appendChild(displayTask());
    }

    let MakeTaskButton = document.createElement("button"); // child of TaskDisplay not entire page
    let TrackTime = document.createElement("div");
    

}

async function Main(){ //start of function

    //to do set up checking cookies and declare islogedin
    if(true === true){ //start of if statment
        HomePage();
    } // end of if statment
    else // start of else statment
    {

        console.log("running");
        LoginPage();

    } // end of else statment

} // end of function

Main();