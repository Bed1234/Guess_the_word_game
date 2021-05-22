player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ;

function send(){
    temp = document.getElementById("word").value;
    word = temp.toLowerCase();


    char1 = word.charAt(1);
    mid = Math.floor(word.length/2);
    char2 = word.charAt(mid);

    last = word.length-1;
    char3 = word.charAt(last);



    remove_char1 = word.replace(char1,"_");
    remove_char2 = remove_char1.replace(char2,"_");
    remove_char3 = remove_char2.replace(char3,"_");

    question_word = "<h4 id='word_display'> Q. " + remove_char3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn="player1";
answer_turn="player2";


function check() {
   temp = document.getElementById("input_check_box").value;
   answer = temp.toLowerCase();
   console.log(answer);

   if (answer == word) {
       if (answer_turn=="player1") {
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = player1_score;
       }
       else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
       }
   }


   if (question_turn == "player1") {
       question_turn="player2"
       document.getElementById("player_question").innerHTML = "Question turn -" + player2_name;
   } else {
    question_turn="player1"
    document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;  
   }


   
   if (answer_turn == "player1") {
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;
} else {
 answer_turn="player1"
 document.getElementById("player_answer").innerHTML = "Answer turn -" + player1_name;  
}
document.getElementById("output").innerHTML="";
}








