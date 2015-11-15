/* Quiz
Multi-dimensional array, all arrays start with an index of 0 by default */

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0; 
// Pos is short for position which keeps track of which question user is on
    
var questions = [ // [] = empty array, add nested [] per question

    [ "As per November 2015, what is the official male marathon record?", "2:01:57", "2:02:57", "2:03:57", "B" ], 
// At least 5 elements: 1 for question, n for n choices, 1 for correct answer 
    [ "As per November 2015, what is the official female marathon record?", "2:11:25", "2:13:25", "2:15:25", "C" ], 
    [ "In San Francisco, if you run the shortest way from 98 Battery Street to the Vista Point across the Golden Gate Bridge, how long will you have run?", "6.8 miles", "7.2 miles", "7.6 miles", "A" ],
    [ "Who said 'A journey of a thousand miles begins with a single step'?", "Laozi", "Ghandi", "Buddha", "A" ], 
    [ "Which of these is nicknamed 'the coldest marathon in the world'?", "Antarctic Ice Marathon", "North Pole Marathon", "Mt Everest Marathon", "B" ],
    [ "In 2014, which marathon actually happened under the coldest temperatures on earth?", "Oymyakon Marathon", "Antartic Ice Marathon", "North Pole Marathon", "A" ],
    [ "In 2014, in what city was the new male record set?", "London", "Rotterdam", "Berlin", "C" ],    
    [ "What is the nationality of the current female world record holder?", "British", "Kenyan", "Ethiopian", "A" ],    
    [ "In 1896 at the Summer Olympics, how many athletes began racing the first officially held marathon?", "32", "25", "17", "C" ],    
    [ "How many did not finish?", "11", "9", "8", "C" ],    
    [ "What famous long-distance runner said 'If you want to run, run a mile. If you want to experience a different life, run a marathon.'?", "Haile Gebrselassie", "Emil Z&#225;potek", "Dennis Kipruto Kimetto", "B" ],    
    [ "Belgian athlete Stefaan Engels ran a marathon every day. What is his longest streak in number of consecutive days?", "52", "180", "365", "C" ],    
    [ "Who said 'A lot of people run a race to see who is the fastest. I run to see who has the most guts, who can punish himself into exhausting pace, and then at the end, push himself even more.'?", "Idris Elba", "Steve Prefontaine", "Gbenga Akinnagbe", "B" ],
    [ "Which of these scientists was also a long-distance runner?", "Alan Turing", "Niels Bohr", "Nikola Tesla", "A" ],      [ "Who said 'If you are losing faith in human nature, go out and watch a marathon'?", "Kathrine Switzer", "Paula Radcliffe", "Kara Goucher", "A" ],
    [ "Another inspiring quote... Who said 'We run, not because we think it is doing us good, but because we enjoy it and cannot help ourselves. The more restricted our society and work become, the more necessary it will be to find some outlet for this craving for freedom. No one can say, 'You must not run faster than this, or jump higher than that.' The human spirit is indomitable.'?", "Roger Bannister", "Peter Maher", "John Landy", "A" ],
    [ "What marathon takes place at the lowest elevation point in the world?", "Death Valley marathon", "Dead Sea ultra marathon", "Amsterdam marathon", "B" ],
    [ "Of these three, who has the highest number of followers on Twitter?", "Paula Radcliffe", "Haile Gebrselassie", "Mo Farah", "C" ],
    [ "In what year did the Battle of Marathon take place?", "499 BC", "490 BC", "449 BC", "B"  ],
    [ "What astronaut completed a triathlon in space?", "Sunita Williams", "Yuri Malenchenko", "Aki Hoshide", "A" ]  
// No comma on last empty array
    ];
    
function _(x){ // Return object reference for id string 
    return document.getElementById(x);
}
    
    
    /* Very dynamic function; inside this function is where the first question of the questions array will be populated to the page for the user to see.
Need to call function to run */
    
function renderQuestion(){ 
// Renders multiple choices and submit button for each question populated. Each time user clicks submit button, next question is populated. 

    test = _("test"); // Object reference for test element ie div#test 

    if(pos >= questions.length){
	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
	_("test_status").innerHTML = "Test Completed";
	pos = 0;
	correct = 0;
	return false;
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length; 
// questions.length is equal to number of questions 
    
    question = questions[pos][0]; // question variable, index [pos][0] is targeting element "As per November 2015...?" is the question 
    chA = questions[pos][1]; // Gets choice 1 
    chB = questions[pos][2]; // Gets choice 2
    chC = questions[pos][3]; // Gets choice 3 
    
    test.innerHTML = "<h3>"+question+"</h3>"; // Renders the question to the user
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>"; // Renders choice A (choice 1) to the user
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>"; // Renders choice B (choice 2) to the user
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>"; // Renders choice C (choice 3) to the user
    
    test.innerHTML += "<buttton onclick='checkAnswer()'>Submit Answer</button>"; // Submit answer button
}
    
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
	if(choices[i].checked){
	    choice = choices[i].value;
	}
    }
    if(choice == questions[pos][4]){
	correct++;
    }
    pos++;
    renderQuestion();
}
    
window.addEventListener("load", renderQuestion, false); // Calls function renderQuestion to run when the page loads
