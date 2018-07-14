
var questions = [
    "Audi brand is (or was) originally from which country?",
    "BMW brand is (or was) originally from which country?",
    "Dodge brand is (or was) originally from which country?",
    "Honda brand is (or was) originally from which country?",
    "Toyota brand is (or was) originally from which country?",
    "Mercedes Benz brand is (or was) originally from which country?"
];
var answers = [
    ["Spain","Australia","United States","Germany"],
    ["Taiwan","South Korea","Germany","Italy"],
    ["India","North Korea", "Japan", "United States"],
    ["China","United States","Canada","Japan"],
    ["Japan","Australia","Nigeria","Germany"],
    ["Australia","Germany","Italy","Russia"]
]
var rightAnswers = [3,2,3,3,0,1]; 

var correctAnswers = 0;

var incorrectAnswers = 0;

var currentQuestion = -1





    

/// Start Button 

$('#Start').on('click', function(){
    $(this).hide();
    newGame();
    
});
var intervalId;
//Timer
function timer(){

    var timerStart = 5;
    
   
    

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      timerStart--;

      $("#Timer").html("<h1>"+timerStart+"</h1>");

      if (timerStart === 0) {
        incorrectAnswers++;
        
        stop();
        timerOut();
        nextQuestion();
        return
        }
      
      
    }
    
    

    run();
    return
    
}

function stop() {
    clearInterval(intervalId);
    timerStart = 0;
           
}

// Choosing New question




// Append question to HTML

function newGame(){
var timerStart = 5
$("#Answers").empty();
$("#Timeout").empty();
$("#Timeout").empty();
currentQuestion++;

timer();
results();

$("#Question").append(questions[currentQuestion]);

for(var i = 0; i < 4; i++){
    var choices = $('<div>');
    choices.text(answers[currentQuestion][i]);
    choices.attr({'data-index': i });
    choices.addClass('thisChoice');
    $('#Answers').append(choices);
    
}

    

// Answer chosen 
$('.thisChoice').on('click',function(){
    userSelect = $(this).data('index');
    

    if(userSelect == rightAnswers[currentQuestion]){
        stop();
        $("#Question").empty();
        $("#Answers").empty();
        $("#Timer").empty();
        $("#Timeout").append("<h1>"+"Correct!"+"</h1>");
        $("#Timeout").append("<h1>"+"Answer is: "+ answers[currentQuestion][rightAnswers[currentQuestion]] + "</h1>");
        clearInterval(timer);
        nextQuestion(); 
        correctAnswers++;
        
       
    }
    else{
        stop();
        $("#Question").empty();
        $("#Answers").empty();
        $("#Timeout").html("<h1>"+"Incorrect!"+"</h1>");
        $("#Timeout").append("<h1>"+"Answer is: "+ answers[currentQuestion][rightAnswers[currentQuestion]] + "</h1>");
        clearInterval(timer);
        nextQuestion();
        incorrectAnswers++;
        
    }
    
    
    
})

};

function results(){
var endGame = incorrectAnswers + correctAnswers
console.log(endGame);
if(currentQuestion === 6){
    stop();
    $("#Question").empty();
    $("#Answers").empty();
    $("#Timeout").empty(); 
    $("#Timeout").html("<h1>"+"Final Score!"+"</h1>");
    $("#Timeout").append("<h1>"+"Correct Answers: "+ correctAnswers + "</h1>");  
    $("#Timeout").append("<h1>"+"Incorrect Answers: "+ incorrectAnswers + "</h1>");
    clearInterval(timer);
}
};



// Timer Ran Out 
function timerOut(){
    $("#Question").empty();
    $("#Answers").empty();
    $("#Timeout").html("<h1>"+"TO SLOW!!!"+"</h1>");
    $("#Timeout").append("<h1>"+"Correct Answer is: "+ answers[currentQuestion][rightAnswers[currentQuestion]] + "</h1>")
    return
}

function nextQuestion(){
    setTimeout(newGame, 3000);
}
