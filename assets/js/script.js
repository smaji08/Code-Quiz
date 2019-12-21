// The needed DOM elements
var qandaEl = document.querySelector("#qanda");
var strtQuizEl = document.querySelector("#strt-quiz");
var timerEl = document.querySelector("#timer");
var highScoreEl = document.querySelector("#highscore");
var navbarEl = document.querySelector("#nav-bar");
var wrapEl = document.querySelector("#wrapper");

// Declaring and initializing the global variables
var secondsRemaining;
var score = 0;
var user = [];
var headText = "";

// When Start Quiz is clicked timer is started and the seonds are set to 15 seconds * no. of questions
function startTimer() {
    secondsRemaining = questions.length * 15;
    interval = setInterval(function() {
      secondsRemaining--;
      renderTime();
    }, 1000);
}

// Diplaying the time in timer element and to stop the times if the seondsRemaining is 0
function renderTime(){
    timerEl.textContent = secondsRemaining;
    if (secondsRemaining === 0) {
        stopTimer();
    }
}

// Stop the timer and function called to show the score
function stopTimer(){
    qandaEl.innerHTML = "";
    timerEl.textContent = secondsRemaining;
    clearInterval(interval);
    showScore();
}

//Showing the Question and answer coices according to the topic selected and timer is also started
// The Question and choices are shown carousel model
function showQandA(){
    if (document.querySelector("#JS-Q").checked){
        questions = questionsJS;
        headText = "JavaScript";
    }
    else {
        questions = questionsJQuery;
        headText = "JQuery";
    }
    startTimer();
    navigate(0);
}

// Creating elements dynamically and displaying the question and corresponding answer choices and calling the chooseAns()
// It is repeated as long as the index of the questions array is less than the length of that array, else stoptimer() is invoked
function navigate(index){
    qandaEl.innerHTML = "";
    if (index < questions.length){
        var p = document.createElement("p");
        p.setAttribute("data-index",index);
        p.setAttribute("style","font-size:22px; font-weight:600; white-space:pre-line;");
        p.textContent = index+1 + ") " + questions[index].title;
        qandaEl.appendChild(p);

        var ol = document.createElement("ol");
        ol.setAttribute("id", "choices");
        ol.addEventListener("click",chooseAns);
        qandaEl.appendChild(ol);
        
        for (var j=0;j<questions[index].choices.length;j++){
            var li = document.createElement("li");
            li.setAttribute("data-index",j);
            li.textContent = j+1 + ": "+ questions[index].choices[j];
            ol.appendChild(li);
        }
        onClick = this.chooseAns;
    }
    else{ 
        stopTimer();
    }
}

//Here the selected option is checked with the correct answer of the particular question 
function chooseAns(event){
    var qIndex = event.target.parentElement.previousSibling.getAttribute("data-index");
    qIndex = parseInt(qIndex);
    
    if(event.target.matches("li")){
        event.preventDefault();
       
        var hr = document.createElement("hr");
        hr.setAttribute("style","clear:both;");
        var p = document.createElement("p");
        qandaEl.appendChild(hr);
        qandaEl.appendChild(p);

        var userChoice = event.target.textContent;
        userChoice = userChoice.slice(3);
        
        // If the answer is matched with userchoice it will show "correct answer" as well as play the correct answer audio
        if (userChoice === questions[qIndex].answer){
            p.setAttribute("style", "color:green; font-size: 1.5em; clear:both;");
            p.textContent = "Correct!";
            document.querySelector("#correctAnswer").play();
        }
        // Else it will be shown "wrong answer" and play the wrong answer audio and 10 sec are subtracted from the remaining time
        else{
            p.setAttribute("style", "color:red; font-size: 1.5em; clear:both;");
            p.textContent = "Wrong !!!";
            document.querySelector("#wrongAnswer").play();
            secondsRemaining = secondsRemaining-10;
        }

        if(secondsRemaining<0){
            secondsRemaining = 0;
            stopTimer();
        }
        // timeout for 300 microseconds to show and play the audio of correct/wrong answer and 
        // next slide of question with options called
        setTimeout(navigate,300,qIndex+1);
    }
}

//The screen elements for showing the scores are created and the score is shown and on clicking the submit button
//the function to store the score in the local storage is called.
function showScore(){
    
    qandaEl.innerHTML = "";
    var div = document.createElement("div");
    qandaEl.appendChild(div);

    var pDone = document.createElement("p");
    pDone.setAttribute("style", "font-size:25px; font-weight:700;");
    pDone.textContent = "All Done!!";

    var pScore = document.createElement("p");
    pScore.setAttribute("style","text-align:left");
    pScore.innerHTML = "Your Final Score is " + "<strong>" + secondsRemaining +"</strong>";

    var form = document.createElement("form");
    form.setAttribute("id","store");
    form.setAttribute("method","POST");

    var label = document.createElement("label");
    label.setAttribute("for","for-initials");
    label.textContent = "Enter your Initials:";

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","for-initials");
    input.setAttribute("name", "for-initials");
    input.value="";

    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("style","background-color: rgb(82, 4, 155);color: white;");
    button.setAttribute("id","store-hs");
    button.textContent = "Submit";
    button.addEventListener("click",storeHS);
    
    div.appendChild(pDone);
    div.appendChild(pScore);
    div.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

}

// Here the score along with the name of the user and chosen topic is stored in local storage and the function
// renderHS() to render the high score from the local storage to the screen is called.
function storeHS(event){
    event.preventDefault();     
    var initials = event.target.previousSibling.value;
    var score = secondsRemaining;
    
    if(initials!==""){
        localStorage.setItem("user",JSON.stringify({
            name : initials, Hscore :score, topic :headText 
        }));
        renderHS();
    }
    else{
        alert("Please enter initials");
    }
}

// Here the final screen elements are created to show the high score and user name from the local storage
// two buttons are created -  one to clear the high score from the local storage and one to go back to the initial
// Start Quiz screen
function renderHS(){
    var lsLength = localStorage.length;
    
    if(lsLength>0){
        var userscore = JSON.parse(localStorage.getItem("user"));
        
        navbarEl.innerHTML="";
        document.querySelector("#placeholder-div").innerHTML = "";
        wrapEl.innerHTML="";
        
        var qandaEl = document.createElement("div");
        qandaEl.setAttribute("class","container");
        qandaEl.setAttribute("style","max-width:500px;margin:auto;margin-top:25px;")
        wrapEl.appendChild(qandaEl);

        var p = document.createElement("p");
        p.textContent = "Highscores - " + userscore.topic ;
        p.setAttribute("style","font-size:40px; font-weight:700; text-align:left");
        qandaEl.appendChild(p);

        var p1 = document.createElement("p");
        p1.setAttribute("id","high-score");
        p1.setAttribute("style","background-color:lightgray;text-align:left");
        p1.innerHTML = "<strong>" + lsLength +". " + userscore.name + ' - ' + userscore.Hscore + "</strong>";
        qandaEl.appendChild(p1);

        var goBackBtn = document.createElement("button");
        goBackBtn.setAttribute("type","submit");
        goBackBtn.setAttribute("style","background-color: rgb(82, 4, 155);color: white;");
        goBackBtn.textContent = "Go Back";
        goBackBtn.addEventListener("click",function(){location.reload()});
        qandaEl.appendChild(goBackBtn);

        var clearHSBtn = document.createElement("button");
        clearHSBtn.setAttribute("type","submit");
        clearHSBtn.setAttribute("style","background-color: rgb(82, 4, 155);color: white; margin-left:10px;");
        clearHSBtn.textContent = "Clear Highscores";
        clearHSBtn.addEventListener("click",delHS);
        qandaEl.append(clearHSBtn);
    }
    else{
        alert("No highscores to show now.. Try your luck noww!!");
    }
}

// local storage is cleared here
function delHS(){
    localStorage.clear();
    document.querySelector("#high-score").textContent = "";
    timerEl.textContent = 0;

}

// Click events for Starting the Quiz and Displaying the High score
strtQuizEl.addEventListener("click", showQandA);
highScoreEl.addEventListener("click",renderHS);