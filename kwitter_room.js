
var firebaseConfig = {
      apiKey: "AIzaSyBqxU7sS6T1IpjVl6xNmkzAMCD8orl04lo",
      authDomain: "sabi-db.firebaseapp.com",
      databaseURL: "https://sabi-db-default-rtdb.firebaseio.com",
      projectId: "sabi-db",
      storageBucket: "sabi-db.appspot.com",
      messagingSenderId: "807696247182",
      appId: "1:807696247182:web:d271fcb15af574a35edcdf",
      measurementId: "G-4X1027BZQ3"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}