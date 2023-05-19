//adicione o código do seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyALAnJV1JezO-Bi1RiZAmuLcfCqtgwwppc",
  authDomain: "kwitterbd-c9b27.firebaseapp.com",
  databaseURL: "https://kwitterbd-c9b27-default-rtdb.firebaseio.com",
  projectId: "kwitterbd-c9b27",
  storageBucket: "kwitterbd-c9b27.appspot.com",
  messagingSenderId: "765789229419",
  appId: "1:765789229419:web:1f8efde36d26b887c4bc2e"
};

//// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() 
{  
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
        { 
            childKey  = childSnapshot.key;
            Room_names = childKey;
            //Comece a programar 
            console.log("Nome da sala: " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Programe até aqui
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

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
