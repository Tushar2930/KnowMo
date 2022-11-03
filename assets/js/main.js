
function openForm()
 {
  document.getElementById('abc').style.display = "block";
  }

function openEditForm() {
  document.getElementById('abcd').style.display = "block";
  }
    //Function to Hide Popup
function closeForm(){
document.getElementById('abc').style.display = "none";
}

function openQuestionsForm() {
  document.getElementById('def').style.display = "block";
  }

function closeQuestionsForm(){
  document.getElementById('def').style.display = "none";
  }

function openAnswersForm() {
  document.getElementById('answer-f').style.display = "block";
  }

function closeAnswersForm(){
  document.getElementById('answer-f').style.display = "none";
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

function editComments(e){
  const data=document.getElementById("required-data").innerText;
  console.log(data);
  document.getElementById("cinpdata").value=data;
  document.getElementById(e).remove();
  
}

function showall(){
  document.getElementById("other-questions").style.height="100%";
  document.querySelector('.answer-right').style.height='auto';
  document.getElementById("other-questions").style.overflow="visible";
}