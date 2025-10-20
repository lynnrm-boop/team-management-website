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

    let taskName = document.createElement("p");
    let taskGroup = document.createElement("p");
    let taskDueDate = document.createElement("p");
    let taskDiscription = document.createElement("p");

    task.appendChild(taskName);
    task.appendChild(taskGroup);
    task.appendChild(taskDueDate);
    task.appendChild(taskDiscription);
    
    document.getElementById("taskDisplay").appendChild(task);

} //end of function

async function makeTask(){ //start of function

    let form = document.createElement("form");
    let taskNameInput = document.createElement("input");
    let taskGroupInput = document.createElement("input");
    let taskDueDateInput = document.createElement("input");
    let taskDiscriptionInput = document.createElement("input");
    let submitInput = document.createElement("button");

    form.style.position = "absolute"
    form.style.display = "grid";
    form.style.width = "50%";
    form.style.height = "75%";
    form.style.gridTemplateRows = "20% 20% 20% 20% 20%";
    form.style.backgroundColor = "black";
    form.style.right = "25%";
    form.style.top = "12.5%"


    taskNameInput.setAttribute("type","text");

    form.appendChild(taskNameInput);
    form.appendChild(taskGroupInput);
    form.appendChild(taskDueDateInput);
    form.appendChild(taskDiscriptionInput);
    form.appendChild(submitInput);


    submitInput.addEventListener("click",(e) => { // function start
        e.preventDefault();

        let input = {
            Name:taskNameInput.value,
            Group:taskGroupInput.value,
            DueDate:taskDueDateInput.value,
            Discription:taskDiscriptionInput.value   
        };

        displayTask(input);

       
        

    } //function end
)

    document.getElementById("root").appendChild(form);
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

    let HomeRoot = document.createElement("div");
    HomeRoot.style.width = "100vw";
    HomeRoot.style.height = "100vh";
    HomeRoot.setAttribute("id","HomeRoot");

    let TaskDisplay = document.createElement("div");
    TaskDisplay.setAttribute("id","taskDisplay")

    // to do connect to backend
   /* for(let i = 0; i < taskList.length; i++){
        TaskDisplay.appendChild(displayTask());
    } */

    let MakeTaskButton = document.createElement("button"); // child of TaskDisplay not entire page
    MakeTaskButton.innerText = "+";
    MakeTaskButton.style.width = "25%";
    MakeTaskButton.style.height = "25%";
    MakeTaskButton.addEventListener("click", makeTask)

    let TrackTime = document.createElement("div");
    
    TaskDisplay.appendChild(MakeTaskButton);
    HomeRoot.appendChild(TaskDisplay);
    HomeRoot.appendChild(TrackTime);

    document.getElementById("root").appendChild(HomeRoot);

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