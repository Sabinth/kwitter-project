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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
      });

      document.getElementById("msg").value = "";
}