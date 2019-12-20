var questionsJS = [
  {
    title: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
    choices: ["strip()","trim()", "cut()","stripped()"], 
    answer: "trim()"
  },
  {
    title: "The setTimeout() belongs to which object?",
    choices: ["Element", "Window", "Location", "None of the above"],
    answer: "Window"
  },
  {
      title: "What is the syntax for creating a function in JavaScript named as callmeFunc?",
      choices: ["function = callmeFunc()", "function callmeFunc()", "function := callmeFunc()", "function : callmeFunc()"],
      answer: "function callmeFunc()"
  },
  {
    title: `Predict the output of the following JavaScript code.
            <script type = "text/javascript">
             var a = "Augustine"; 
             var x = a.lastIndexOf("u");
             document.write(x);
            </script> `,
    choices: ["1","3","0","Error"],
    answer: "3"
    
  },
  {
    title: "How to initialize an array in JavaScript?",
    choices: ['var array = "str1","str2","str3"', "var array = (1:str1, 2:str2, 3:str3)", 
              "var array = (1=str1,2=str2, 3=str3)", `var array = ["str1","str2","str3"]`],
    answer: `var array = ["str1","str2","str3"]`
  }
];

var questionsJQuery = [
  {
    title: "Which of the following is a single global function defined in the jQuery library?",
    choices: ["jQuery()", "$()", "Queryanalysis()", "None of the above"],
    answer: "jQuery()"

},
{
  title: "Which jQuery method is used to hide selected elements?",
  choices: ["hidden()","hide()","visible(false)","display(none)"],
  answer: "hide()"
},
{
  title: "Which of the following is used for parsing JSON text?",
  choices: ["jQuery.each()","jQuery.parseJSON()","jQuery.noConflict()","jQuery(parseJSON())"],
  answer: "jQuery.parseJSON()"
},
{
  title: "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
  choices: ["toggleClass()","switch()","altClass()","switchClass()"],
  answer: "switchClass()"
},
{
  title: "Which of the following jQuery method checks the current selection against an expression?",
  choices: ["getIs( selector)","is(selector)","checkIs(selector)","None of the above"],
  answer: "is(selector)"
}
];

