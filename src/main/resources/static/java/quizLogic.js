
/*
Q1: what is scientific name of human: Homo sapiens, canine, felion, Germany
Q2: what is the closest planet to earth? mercury, venus, pluto, Mars
Q3: Does white light reflect or absorb light? reflects
Q4: what is not a primary colours that a screen would use? 
 
*/
document.getElementById("previous").disabled = true // make the previous button disable at start
 // object that contains quiz question info
let Q1 = {
        question: 'Q1: what is scientific name of human? ',
        option1: ' Homo sapiens ',
        option2: ' Canine',
        option3: ' Felion',
        option4: " Germany",
        answer: "1",
}

let Q2 = {
    question: 'Q2: what is the closest planet to earth?',
    option1: ' Mercury',
    option2: ' Venus',
    option3: ' Moon',
    option4: " Mars",
    answer: "2",
}

let Q3 = {
    question: 'Q3: What happens to white light when it shines on a white surface?',
    option1: ' Absorb',
    option2: ' Transform',
    option3: ' Reflect',
    option4: " Replicate",
    answer: "3",
}
let Q4 = {
    question: 'Q4: what is not a primary colours that a screen would use? ',
    option1: ' Red',
    option2: ' Green',
    option3: ' Blue',
    option4: "  Yellow",
    answer: "4",
}

let Q5 = {
    question: 'Q5: which element has the atomic number of 6',
    option1: ' Hydrogen',
    option2: ' Nitrogen',
    option3: ' Carbon',
    option4: " Gold",
    answer: "3",
}

let saveAnswer = [-1,-1,-1,-1,-1]; // list that will contain the users saved answers
let questions = [Q1,Q2,Q3,Q4,Q5]; // the question info object into a list
let currentQuestion = 0;
function getoption(x,y) // function that pulls the question info
{
   if (y == 0)
    {
        return questions[x].option1;
    }
    else if ( y == 1)
    {
        return questions[x].option2;
    }
    else if (y == 2)
    {
        return questions[x].option3;
    }
    else if (y == 3)
    {
        return questions[x].option4;
    }
    return "N/A"
    
}

function nextQuestions() // function that will change to next page
{
  
    
    currentQuestion++; // increment the next question
    let myElement = document.getElementById('the-question')  // change the elements content to next question
    myElement.textContent = questions[currentQuestion].question;
    let myElement1 = document.getElementById('option1')
    myElement1.textContent = questions[currentQuestion].option1;
    let myElement2 = document.getElementById('option2')
    myElement2.textContent = questions[currentQuestion].option2;
    let myElement3 = document.getElementById('option3')
    myElement3.textContent = questions[currentQuestion].option3;
    let myElement4 = document.getElementById('option4')
    myElement4.textContent = questions[currentQuestion].option4;

    let radioButtons = document.getElementsByName('options-linked'); // to clear the radio

    for (let i = 0; i<4; i++) // save the answer user wrote and clears it
    {
        if (radioButtons[i].checked == true)
        {
        
            saveAnswer[currentQuestion-1] = i;

        }
        radioButtons[i].checked = false;
    }
    
    if (currentQuestion < 5) // if the page its going to had a answer selected than recheck it to user selected answer
    {
       if (saveAnswer[currentQuestion] != -1)
       {

           radioButtons[saveAnswer[currentQuestion]].checked = true;

       }
    }
   

    if (questions.length-1 == currentQuestion) // if last page disable next button
    {
        document.getElementById("next").disabled = true
        return;
    }
    else
    {
        document.getElementById("previous").disabled = false

    }
}
function prevQuestions() // function that goes to previous page
{
   
    
    currentQuestion--; // decrement next question
    let myElement = document.getElementById('the-question') // change the element to next question
    myElement.textContent = questions[currentQuestion].question;
    let myElement1 = document.getElementById('option1')
    myElement1.textContent = questions[currentQuestion].option1;
    let myElement2 = document.getElementById('option2')
    myElement2.textContent = questions[currentQuestion].option2;
    let myElement3 = document.getElementById('option3')
    myElement3.textContent = questions[currentQuestion].option3;
    let myElement4 = document.getElementById('option4')
    myElement4.textContent = questions[currentQuestion].option4;

    let radioButtons = document.getElementsByName('options-linked'); // to clear the radio

    for (let i = 0; i<4; i++) // save the last question and clear it
    {
        if (radioButtons[i].checked == true)
        {
        
            saveAnswer[currentQuestion+1] = i;

        }
        radioButtons[i].checked = false;
    }
    
    if (currentQuestion >= 0) // if user put a answer than check// basically shows the saved Q
    {
       if (saveAnswer[currentQuestion] != -1)
       {
        
           radioButtons[saveAnswer[currentQuestion]].checked = true;

       }
    }
    
    if (0  == currentQuestion) // disable previous if on first page
    {
        document.getElementById("previous").disabled = true

        return
    }
    else
    {
        document.getElementById("next").disabled = false

    }
    
}
let corrctAns = [Q1.answer-1,Q2.answer-1,Q3.answer-1,Q4.answer-1,Q5.answer-1] // the solutions

let score = 0; // the score of the user
let QuestionGotright = [-1,-1,-1,-1,-1] // which questions they got right

function results() // shows the result of there exam
{
    let radioButtons = document.getElementsByName('options-linked'); // to clear the radio

    for (let i = 0; i<4; i++) // save the question if user changed the answer
    {
        if (radioButtons[i].checked == true)
        {
        
            saveAnswer[currentQuestion] = i;

        }
        radioButtons[i].checked = false;
    }
    for (let i = 0; i < corrctAns.length; i++) // checks which questions user got right
    {
       
        if (corrctAns[i] == saveAnswer[i])
        { 
            QuestionGotright[i] = 1;
            score++;

        }
        else
        {
            QuestionGotright[i] = 0;
        }
           

    }
    document.getElementById('choices').innerHTML = ''; // remove old page
    document.getElementById('the-question').innerHTML = ''; // remove old text
    document.getElementById('reveal').innerHTML = 'The results are '; // show result
    document.getElementById('reveal2').innerHTML = 'you got ' + score + '/5'; // show result
    document.getElementById('reveal3').innerHTML = '<br>'; // new line
    for (let i = 4; i< 9; i++) // show which questions user got right and what they  picked
    {
        if (QuestionGotright[i-4] == 1)
        {
            document.getElementById('reveal' + i).innerHTML = 'Q'+ (i-3) + ' Your Answer: ' + getoption(i-4,saveAnswer[i-4]) + '<br> You\'re Answer is Correct! ' ;
        }
        else 
        {
         
            document.getElementById('reveal' + i).innerHTML = 'Q'+ (i-3) + ' Your Answer: ' + getoption(i-4,saveAnswer[i-4]) + '<br>'+'The Correct Answer is '  + getoption(i-4,corrctAns[i-4]);
        }

    }
   
   
}

document.getElementById('next').addEventListener('click', nextQuestions); // call function when button gets clicked
document.getElementById('previous').addEventListener('click', prevQuestions); // call function when button gets clicked
document.getElementById('submitBtn').addEventListener('click', results); // call function when button gets clicked
 


