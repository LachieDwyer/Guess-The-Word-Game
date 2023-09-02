function addUser(){
player1_name=document.getElementById("player1_name").value;
player2_name=document.getElementById("player2_name").value;

localStorage.setItem("player1_namekey", player1_name);
localStorage.setItem("player2_namekey", player2_name);

window.location="gameScreen.html"
}