username = localStorage.getItem("user");
console.log(username);
document.getElementById("userName").innerHTML = "Hi " +  username + "!";
function addRoom(){
roomname = document.getElementById("roomName").innerHTML;
localStorage.setItem("roomname",roomname);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+roomnames+" onclick='redirectToNewRoom(this.id)'>#" + roomnames + "</div>";
//End code
});});}
getData();
function redirectToNewRoom(anyroom){
    console.log(anyroom);
    localStorage.setItem("Roomname", anyroom);
    window.location = "kwitter_page.html";
    }