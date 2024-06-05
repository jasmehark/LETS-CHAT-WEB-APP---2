const firebaseConfig = {
    apiKey: "AIzaSyCdqSllnppmDE7JrbV9ZVuAKUs49U1CDVo",
    authDomain: "lets-chat-web-app-61650.firebaseapp.com",
    projectId: "lets-chat-web-app-61650",
    storageBucket: "lets-chat-web-app-61650.appspot.com",
    messagingSenderId: "960612851062",
    appId: "1:960612851062:web:551ccaa83e8155feaeae57"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser() {

    user_name=document.getElementById("user_name".value);

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}