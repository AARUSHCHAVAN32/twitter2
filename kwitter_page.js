
 const firebaseConfig = {
      apiKey: "AIzaSyCeUUKCLkXKWISgcwGBOnyYhFevuCQ3NSw",
      authDomain: "kwitter-1a388.firebaseapp.com",
      databaseURL: "https://kwitter-1a388-default-rtdb.firebaseio.com",
      projectId: "kwitter-1a388",
      storageBucket: "kwitter-1a388.appspot.com",
      messagingSenderId: "720334766516",
      appId: "1:720334766516:web:4755a6cd8cbf9d973ab2e1",
      measurementId: "G-0DL2JQEYF2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username")
    room_name=localStorage.getItem("my room name is")
    function send(){
      msg = document.getElementById("message").value ;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      }) ; 
      document.getElementById("message").value=""
    }
    function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("my room name is")
      window.location = "index.html"
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
