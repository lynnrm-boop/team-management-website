async function LoginPage(){ // start of function
    
    let form = document.createElement("form");
    let usernameInput = document.createElement("input");
    let passwordInput = document.createElement("input");
    let submitButton = document.createElement("button");
    let signUp = document.createElement("button");

    usernameInput.setAttribute("type","text");
    passwordInput.setAttribute("type","password");

    submitButton.addEventListener("click",async function (e){
        e.preventDefault();



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
    task.style.display = "grid";
    task.style.width = "85%";
    task.style.color = "white";
    task.style.gridTemplateRows = "50% 50%";
    task.style.gridTemplateColumns = "50% 50%";
    task.style.backgroundColor = "black";

    let taskName = document.createElement("p");
    let taskGroup = document.createElement("p");
    let taskDueDate = document.createElement("p");
    let taskDiscription = document.createElement("p");

    taskName.innerText = `${taskData.Name}`;
    taskGroup.innerText = `${taskData.Group}`;
    taskDueDate.innerText = `${taskData.DueDate}`;
    taskDiscription.innerText = `${taskData.Discription}`;

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

       
        form.remove();

    } //function end
)

    document.getElementById("root").appendChild(form);
    //todo make this data send to backend

} // end of function

async function EditTask(task){ //start of function

} // end of function

async function trackTime(task){ //start of function

    // todo add track time code
    document.getElementById("trackTime").innerHTML = "";

    let TaskTrackRoot = document.createElement("div");
    let TaskName = document.createElement("h1");
    let Timer = document.createElement("h3");
    let StartButton = document.createElement("button");
    let StopButton = document.createElement("button");

    TaskTrackRoot.style.width = "100%";
    TaskTrackRoot.style.height = "100%";
    TaskTrackRoot.style.display = "grid";
    TaskTrackRoot.style.gridTemplateRows = "25% 25% 25% 25%";
    TaskTrackRoot.style.gridTemplateColumns = "25% 25% 25% 25%";

    TaskName.style.gridColumnStart = "1";
    TaskName.style.gridColumnEnd = "1";
    TaskName.style.gridRowStart = "1";
    TaskName.style.gridRowEnd = "1";
    TaskName.innerText = `${task.Name}`

    Timer.style.gridColumnStart = "2";
    Timer.style.gridColumnEnd = "3";
    Timer.style.gridRowStart = "1";
    Timer.style.gridRowEnd = "1";
    Timer.innerText = "00:00:00";

    StartButton.style.gridColumnStart = "1";
    StartButton.style.gridColumnEnd = "2";
    StartButton.style.gridRowStart = "4";
    StartButton.style.gridRowEnd = "4";
    StartButton.innerText = "start";

    StopButton.style.gridColumnStart = "3";
    StopButton.style.gridColumnEnd = "4";
    StopButton.style.gridRowStart = "4";
    StopButton.style.gridRowEnd = "4";
    StopButton.innerText = "stop";

    TaskTrackRoot.appendChild(TaskName);
    TaskTrackRoot.appendChild(Timer);
    TaskTrackRoot.appendChild(StartButton);
    TaskTrackRoot.appendChild(StopButton);

    document.getElementById("trackTime").appendChild(TaskTrackRoot);

} // end of function

async function GetData(){ //start of functon

    //todo connect backend

} // end of function

async function HomePage(Logdata){

    // this create the home page

    document.getElementById("root").innerHTML = ""; // clears the root

    //start of homeRoot

    let HomeRoot = document.createElement("div");
    HomeRoot.style.width = "90vw";
    HomeRoot.style.height = "98vh";
    HomeRoot.setAttribute("id","HomeRoot"); 
    
    // end of homeRoot

    // start of task display

    let TaskDisplay = document.createElement("div");
    TaskDisplay.setAttribute("id","taskDisplay")
    TaskDisplay.style.width = "75%"
    TaskDisplay.style.height = "100%"
    TaskDisplay.style.position = "relative"; 
    TaskDisplay.style.border = "2px solid rgb(50,50,50)"; 
    
    // end of taskDisplay 

    // to do connect to backend
   /* for(let i = 0; i < taskList.length; i++){
        TaskDisplay.appendChild(displayTask());
    } */

    // start of makeTaskButton

    let MakeTaskButton = document.createElement("button"); // child of TaskDisplay not entire page
    MakeTaskButton.innerText = "+";
    MakeTaskButton.style.width = "50px";
    MakeTaskButton.style.height = "50px";
    MakeTaskButton.style.position = "absolute";
    MakeTaskButton.style.right = "5%";
    MakeTaskButton.style.bottom = "5%";
    MakeTaskButton.style.borderRadius = "100%";
    MakeTaskButton.addEventListener("click", makeTask);

    //end of MakeTaskButton

    //  start of TrackTime

    let TrackTime = document.createElement("div");
    TrackTime.setAttribute("id","trackTime");

    //end of trackTime
    
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