# Code-Quiz
https://smaji08.github.io/Code-Quiz/

This application was developed using Bootstrap 4.3.1, HTML5, CSS3, JavaScript and DOM API.

### Overview
This is an application to take a timed quiz on JavaScript fundamentals and JQuery that stores high scores so that I can gauge my progress.

### Features

* Play proceeds as follows:


    - The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

    - The user can choose from 2 different quizes - JavaScript and JQuery.


    - Clicking the "Start Quiz" button presents the user with a series of questions related to the selected topic. The timer is initialized with a value and immediately begins countdown.


    - Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (here, 10 seconds are subtracted from time remaining).


    - When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

    - The Clear High Score clears it from the local storage as well.

#### Bonus
   - The Audio files for Correct and Wrong answers added.
   - Multiple Quizes added.
   - Minimum customization done.
   - Application added to https://smaji08.github.io/Bootstrap-Portfolio/

### My Experience
My approach to this application was first to print the array of questions and corresponding answer choices. I used the carousel method for that naavigating one from next. The next was to check the user selected answer with the correct answer stored in the question array. I achieved this creating data-index for question and matching the same with the question in the array which was a challenge initially and adding click event for the user choice and matching it with the user answer.

The timer is set to set the countdown and after the user finshes all the questions or when the timer reaches 0, the high score is set to that and it is stored in local storage with the initial of the user. User has the option to delete it from the local storage.

As bonus, the user has the option to select 2 different quizes and audio was also added when  the user chooses correct answer and a different audio sound for wrong answer.

The application is added to my portfolio application https://smaji08.github.io/Bootstrap-Portfolio/portfolio.html

### Credits

1. http://stackoverflow.com/
2. https://www.w3schools.com/
3. https://gomakethings.com/
4. https://www.freecodecamp.org/


