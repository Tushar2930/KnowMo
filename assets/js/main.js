// const element =document.querySelector(".post-input-form");
function openForm() {
    document.getElementById('abc').style.display = "block";
    }
    function openEditForm() {
      document.getElementById('abcd').style.display = "block";
      }
    //Function to Hide Popup
    function closeForm(){
    document.getElementById('abc').style.display = "none";
    }

var input = document.getElementById("cinpdata");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    document.getElementById("myBtn").click();
  }
});

function opencommets(){
  document.getElementById('commentpf').style.display = "block";
} 