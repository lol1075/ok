  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCcZow4xKbXfGF_3yS7zRox-lW4XJnckNs",
      authDomain: "kwitter-61361.firebaseapp.com",
      databaseURL: "https://kwitter-61361-default-rtdb.firebaseio.com",
      projectId: "kwitter-61361",
      storageBucket: "kwitter-61361.appspot.com",
      messagingSenderId: "331503137823",
      appId: "1:331503137823:web:81b50b9361243c2bf3d12a",
      measurementId: "G-3R3KWFYTZN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
  //ADD YOUR FIREBASE LINKS
  
    user_name = localStorage.getItem("user_name");
  
    document.getElementById("user_name").innerHTML = "Welcome " + user_name+ "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
      


      

