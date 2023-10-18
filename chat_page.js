var firebaseConfig = {
  apiKey: "AIzaSyCp4l9V_p1SWCCi-L2KKUBqMMeTlu0GJDY",
  authDomain: "kwitter-25739.firebaseapp.com",
  databaseURL: "https://kwitter-25739-default-rtdb.firebaseio.com",
  projectId: "kwitter-25739",
  storageBucket: "kwitter-25739.appspot.com",
  messagingSenderId: "108909124359",
  appId: "1:108909124359:web:8017cc80a2810feac183a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");
    
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
       });
    
      document.getElementById("msg").value = "";
    }
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
             console.log(firebase_message_id);
                 console.log(message_data);
                 name = message_data['name'];
                 message = message_data['message'];
             name_with_tag = "<h4> "+ name ;
             message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            row = name_with_tag + message_with_tag;       
            document.getElementById("output").innerHTML += row;
    //End code
          } });  }); }
    getData();
    
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    