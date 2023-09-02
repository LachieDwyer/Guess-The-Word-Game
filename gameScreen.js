player1_name = localStorage.getItem("player1_namekey");
player2_name = localStorage.getItem("player2_namekey");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":"
document.getElementById("player2_name").innerHTML = player2_name + ":"

document.getElementById("player1_score").innerHTML = player1_score + ":"
document.getElementById("player2_score").innerHTML = player2_score + ":"

document.getElementById("playerQuestion").innerHTML = "Question Player:" + player1_name
document.getElementById("playerAnswer").innerHTML = "Answer Player:" + player2_name

function send(){

get_Word = document.getElementById("word").value;
lowercase_Word = get_Word.toLowerCase()

console.log("The lowercase word is"+lowercase_Word);

second_letter = lowercase_Word.charAt(1)
console.log("Second letter is = " + second_letter)

index_last = lowercase_Word.length - 1
last_letter = lowercase_Word.charAt(index_last)
console.log("Last letter is = " + last_letter)

index_middle = Math.floor(lowercase_Word.length/2)
middle_letter = lowercase_Word.charAt(index_middle)
console.log("Middle Letter is = " + middle_letter)

output1 = lowercase_Word.replace(second_letter, "_")
output2 = output1.replace(middle_letter, "_")
output3 = output2.replace(last_letter, "_")
console.log(output3)

question_word = "<h4>Question:" + output3 + "</h4> <br>"
input_box = "Answer: <input type='text' id='input_checkbox'><br><br>"
check_button = "<button class='btn btn-info' onclick='check()'>Check</button>"

row = question_word + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

question_turn = "p1"
answer_turn = "p2"

function check(){
answer = document.getElementById("input_checkbox").value
lowercase_Answer = answer.toLowerCase();
console.log("Lowercase Answer = " + lowercase_Answer)

if (lowercase_Answer == lowercase_Word){
  if (answer_turn == "p2"){
    player2_score = player2_score + 1
    document.getElementById("player2_score").innerHTML = player2_score
  }
  else{
    player1_score = player1_score + 1
    document.getElementById("player1_score").innerHTML = player1_score
  }
}

if (question_turn == "p1"){
question_turn = "p2"
document.getElementById("playerQuestion").innerHTML = "Question Player:" + player2_name
}
else{
question_turn = "p1"
document.getElementById("playerQuestion").innerHTML = "Question Player:" + player1_name
}

if (answer_turn == "p1"){
answer_turn = "p2"
document.getElementById("playerAnswer").innerHTML = "Answer Player:" + player2_name
}
else{
answer_turn = "p1"
document.getElementById("playerAnswer").innerHTML = "Answer Player:" + player1_name
}

}