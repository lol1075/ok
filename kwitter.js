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

function addUser() {

  user_name = document.getElementById("user_name").value;

 /*firebase.database().ref("/").child(user_name).update({
    purpose : "adding user name"
  });*/

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

 function addName() {

   
  user_name=document.getElementById("add_name").value
    firebase.database().ref("/").child("add_name").update( {
    purpose:"adding name"

  
 });

}
